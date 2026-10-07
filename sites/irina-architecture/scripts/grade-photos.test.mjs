import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const script = fileURLToPath(new URL("./grade-photos.mjs", import.meta.url));
const run = (...args) => execFileSync(process.execPath, ["--experimental-strip-types", script, ...args], { stdio: "pipe" });
async function workspace(t) {
  const root = await mkdtemp(path.join(tmpdir(), "im-photo-test-"));
  assert.equal(path.dirname(path.resolve(root)), path.resolve(tmpdir()));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test("CLI processes every input without --out, including one file alone", async (t) => {
  const root = await workspace(t);
  const first = path.join(root, "first.png"), second = path.join(root, "second.png");
  for (const file of [first, second]) {
    await sharp({ create: { width: 30, height: 20, channels: 3, background: "#b7b3aa" } }).png().toFile(file);
  }
  run(first);
  assert.equal((await sharp(path.join(root, "first-site.jpg")).metadata()).width, 30);
  run(first, second);
  for (const name of ["first-site.jpg", "second-site.jpg"]) {
    const meta = await sharp(path.join(root, name)).metadata();
    assert.equal(meta.width, 30); assert.equal(meta.height, 20); assert.equal(meta.format, "jpeg");
  }
});

test("CLI respects EXIF orientation, proportions and an explicit output path", async (t) => {
  const root = await workspace(t);
  const input = path.join(root, "phone.jpg"), output = path.join(root, "prepared", "phone.jpg");
  await sharp({ create: { width: 4000, height: 2000, channels: 3, background: "#b7b3aa" } })
    .withMetadata({ orientation: 6 }).jpeg().toFile(input);
  run(input, "--out", output);
  const meta = await sharp(output).metadata();
  assert.equal(meta.width, 1400); assert.equal(meta.height, 2800);
  assert.equal(meta.channels, 3); assert.equal(meta.orientation, undefined);
});

test("CLI accepts a grayscale PNG and emits a normal RGB JPEG", async (t) => {
  const root = await workspace(t);
  const input = path.join(root, "gray.png");
  await sharp({ create: { width: 30, height: 20, channels: 3, background: "#888888" } })
    .toColourspace("b-w").png().toFile(input);
  run(input);
  const meta = await sharp(path.join(root, "gray-site.jpg")).metadata();
  assert.equal(meta.channels, 3); assert.equal(meta.width, 30); assert.equal(meta.height, 20);
});
