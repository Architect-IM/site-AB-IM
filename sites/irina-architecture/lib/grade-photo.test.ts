import assert from "node:assert/strict";
import test from "node:test";
import { gradeRgb, gradedSize } from "./grade-photo.ts";

test("gray stays gray and close to the original", () => {
  const [r, g, b] = gradeRgb(128, 128, 128);
  assert.ok(Math.abs(r - g) <= 3 && Math.abs(g - b) <= 6);
  assert.ok(r > 120 && r < 145);
});

test("black is lifted only a little and white is not blown", () => {
  const black = gradeRgb(0, 0, 0);
  const white = gradeRgb(255, 255, 255);
  assert.ok(black.every((channel) => channel < 20));
  assert.ok(white.every((channel) => channel > 235 && channel <= 255));
});

test("a strong blue becomes quieter and a little warmer", () => {
  const [r, g, b] = gradeRgb(20, 40, 220);
  assert.ok(b > r && b > g);
  assert.ok(b < 220);
  assert.ok(r > 20);
});

test("large photographs shrink to the long edge and small ones stay", () => {
  assert.deepEqual(gradedSize(6000, 4000), { width: 2800, height: 1867 });
  assert.deepEqual(gradedSize(1200, 800), { width: 1200, height: 800 });
});
