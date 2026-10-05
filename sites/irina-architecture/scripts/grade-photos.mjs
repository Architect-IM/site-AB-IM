import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { gradeRgb, gradedSize, photoGrade } from "../lib/grade-photo.ts";

const args = process.argv.slice(2);
const outFlag = args.indexOf("--out");
const output = outFlag >= 0 ? args[outFlag + 1] : "";
const inputs = args.filter((arg, index) => arg !== "--out" && index !== outFlag + 1);

if (!inputs.length || (outFlag >= 0 && !output)) {
  console.error("Использование: node --experimental-strip-types scripts/grade-photos.mjs снимок.jpg [--out public/assets/снимок.jpg]");
  process.exit(1);
}
if (output && inputs.length !== 1) {
  console.error("С --out можно передать только один снимок.");
  process.exit(1);
}

function destination(input) {
  if (output) return output;
  const parsed = path.parse(input);
  return path.join(parsed.dir, `${parsed.name}-site.jpg`);
}

for (const input of inputs) {
  const image = sharp(input).rotate();
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error(`Не удалось прочитать ${input}`);
  const size = gradedSize(meta.width, meta.height);
  const { data, info } = await image
    .resize(size.width, size.height, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const pixels = Buffer.from(data);
  for (let index = 0; index < pixels.length; index += 3) {
    const [red, green, blue] = gradeRgb(pixels[index], pixels[index + 1], pixels[index + 2]);
    pixels[index] = red;
    pixels[index + 1] = green;
    pixels[index + 2] = blue;
  }
  const target = destination(input);
  await mkdir(path.dirname(target), { recursive: true });
  await sharp(pixels, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: Math.round(photoGrade.jpegQuality * 100), mozjpeg: true })
    .toFile(target);
  console.log(`${input} → ${target} (${info.width}×${info.height})`);
}
