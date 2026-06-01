import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// IMPORTANT: When deploying to GitHub Pages at https://<user>.github.io/<repo>/
// update `base` below to '/<repo>/' (with trailing slash). For a custom domain
// or root deployment, set base: '/'.
export default defineConfig({
  base: "/nombre-del-repo/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
