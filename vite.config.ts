import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/test/setup.ts',
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias "@" to the "./src" directory
    },
  },
  build: {
    outDir: "dist", // Output directory for build files
  },
});
