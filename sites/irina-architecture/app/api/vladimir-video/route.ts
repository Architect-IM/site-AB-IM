const videoPage = "https://vk.com/video_ext.php?oid=-72312658&id=456239114";
let cachedDownload: { url: string; expiresAt: number } | undefined;

export const dynamic = "force-dynamic";

async function downloadUrl() {
  if (cachedDownload && cachedDownload.expiresAt > Date.now()) return cachedDownload.url;
  const response = await fetch(videoPage, { signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error("Video source unavailable");
  const page = await response.text();
  const configuration = page.match(/\bvar\s+playerParams\s*=\s*(\{[\s\S]*?\})\s*;/);
  if (!configuration) throw new Error("Public video configuration unavailable");
  const player: { params?: Record<string, unknown>[] } = JSON.parse(configuration[1]);
  const source = player.params?.[0];
  const candidate = source?.url720 ?? source?.url480 ?? source?.url1080 ?? source?.url360;
  if (typeof candidate !== "string") throw new Error("Public MP4 source unavailable");
  const url = new URL(candidate, videoPage);
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Unsupported video source");
  cachedDownload = { url: url.href, expiresAt: Date.now() + 5 * 60_000 };
  return url.href;
}

async function videoResponse(request: Request) {
  try {
    const url = await downloadUrl();
    const headers = new Headers();
    const range = request.headers.get("range");
    if (range) headers.set("range", range);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25_000);
    let upstream: Response;
    try {
      upstream = await fetch(url, {
        method: request.method === "HEAD" ? "HEAD" : "GET",
        headers,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
    if (!upstream.ok) {
      cachedDownload = undefined;
      return new Response(null, { status: upstream.status === 416 ? 416 : 502 });
    }
    const output = new Headers({
      "Content-Type": "video/mp4",
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, max-age=300",
      "Content-Disposition": 'inline; filename="vladimir-context.mp4"',
    });
    for (const name of ["content-length", "content-range", "etag", "last-modified"]) {
      const value = upstream.headers.get(name);
      if (value) output.set(name, value);
    }
    if (request.method === "HEAD") return new Response(null, { status: upstream.status, headers: output });
    const reader = upstream.body?.getReader();
    const first = await reader?.read();
    if (!reader || !first || first.done || !first.value.byteLength) {
      cachedDownload = undefined;
      return new Response(null, { status: 502, headers: { "Cache-Control": "no-store" } });
    }
    const body = new ReadableStream<Uint8Array>({
      start(controller) { controller.enqueue(first.value); },
      async pull(controller) {
        const chunk = await reader.read();
        if (chunk.done) controller.close();
        else controller.enqueue(chunk.value);
      },
      cancel(reason) { return reader.cancel(reason); },
    });
    return new Response(body, {
      status: upstream.status,
      headers: output,
    });
  } catch {
    return new Response(null, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

export const GET = videoResponse;
export const HEAD = videoResponse;
