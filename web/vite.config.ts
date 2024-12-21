import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(""), "src"),
    },
  },
});