/** The production Site lives at /. GitHub review copies live in a subdirectory. */
export const previewBasePath = process.env.NEXT_PUBLIC_PREVIEW_BASE_PATH ?? "";

export function sitePath(value: string): string {
  if (!previewBasePath || !value.startsWith("/") || value.startsWith("//")) return value;
  if (value === previewBasePath || value.startsWith(`${previewBasePath}/`)) return value;
  return `${previewBasePath}${value}`;
}

export function siteHtml(html: string): string {
  return html.replace(/\b(href|src)="(\/[^"\s]*)"/g, (_, attribute, value) => `${attribute}="${sitePath(value)}"`);
}

export function sitePathname(value: string): string {
  return previewBasePath && (value === previewBasePath || value.startsWith(`${previewBasePath}/`))
    ? value.slice(previewBasePath.length) || "/"
    : value;
}
