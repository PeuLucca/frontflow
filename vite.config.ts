import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// must match the repository name for built asset URLs to resolve.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
