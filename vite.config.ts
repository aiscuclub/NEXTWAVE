import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/NEXTWAVE/" : "/",  // dev 用 / ，build 才加 /NEXTWAVE/
}));
