import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve("pages"),
  base: "/DarkDAW/",
  publicDir: resolve("public"),
  plugins: [react()],
  build: { outDir: resolve("dist/pages"), emptyOutDir: true },
});
