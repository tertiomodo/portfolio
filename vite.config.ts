import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@fonts": path.resolve(__dirname, "./src/@fonts"),
      "@modules": path.resolve(__dirname, "./src/@modules"),
      "@data": path.resolve(__dirname, "./src/@data"),
      "@appTypes": path.resolve(__dirname, "./src/@appTypes"),
      "@hooks": path.resolve(__dirname, "./src/@hooks"),
    },
  },
})
