const publicKey = "https://disk.yandex.ru/i/hWBIq7RIz01WYg";
let cachedDownload: { url: string; expiresAt: number } | undefined;

export const dynamic = "force-dynamic";

async function downloadUrl() {
  if (cachedDownload && cachedDownload.expiresAt > Date.now()) return cachedDownload.url;
  const api = new URL("https://cloud-api.yandex.net/v1/disk/public/resources/download");
  api.searchParams.set("public_key", publicKey);
  const response = await fetch(api, { signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error("Video source unavailable");
  const result: { href?: string } = await response.json();
  if (!result.href) throw new Error("Video download link unavailable");
  cachedDownload = { url: result.href, expiresAt: Date.now() + 5 * 60_000 };
  return result.href;
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
      "Content-Disposition": 'inline; filename="vladimir-spring.mp4"',
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
