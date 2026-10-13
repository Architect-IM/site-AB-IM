/** File grade for photographs before the site's own, lighter color filter. */

export const photoGrade = {
  longEdge: 2800,
  jpegQuality: 0.84,
  saturation: 0.88,
  warmth: { r: 1.035, g: 1.005, b: 0.965 },
} as const;

function tone(channel: number): number {
  const x = channel / 255;
  const lifted = x + 0.045 * (1 - x) * (1 - x);
  const rolled = lifted - 0.03 * lifted * lifted * lifted;
  return Math.min(1, Math.max(0, (rolled - 0.5) * 1.05 + 0.5));
}

export function gradeRgb(r: number, g: number, b: number): [number, number, number] {
  let red = tone(r) * photoGrade.warmth.r;
  let green = tone(g) * photoGrade.warmth.g;
  let blue = tone(b) * photoGrade.warmth.b;
  const luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  const keep = photoGrade.saturation;
  red = luma + (red - luma) * keep;
  green = luma + (green - luma) * keep;
  blue = luma + (blue - luma) * keep;
  const byte = (value: number) => Math.min(255, Math.max(0, Math.round(value * 255)));
  return [byte(red), byte(green), byte(blue)];
}

export function gradePixels(pixels: Uint8ClampedArray): void {
  for (let index = 0; index < pixels.length; index += 4) {
    const [red, green, blue] = gradeRgb(pixels[index], pixels[index + 1], pixels[index + 2]);
    pixels[index] = red;
    pixels[index + 1] = green;
    pixels[index + 2] = blue;
  }
}

export function gradedSize(width: number, height: number): { width: number; height: number } {
  const longEdge = Math.max(width, height);
  if (longEdge <= photoGrade.longEdge) return { width, height };
  const scale = photoGrade.longEdge / longEdge;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}
