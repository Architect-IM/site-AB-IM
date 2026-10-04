import { defineConfig } from "vite";
import vinext from "vinext";

// Review builds are static; live Sites publishing keeps vite.config.ts.
export default defineConfig({ plugins: [vinext()] });
