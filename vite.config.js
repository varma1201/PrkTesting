import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react(),
    // Use Brotli for better compression
    compression({
      algorithm: "brotliCompress", // Using Brotli algorithm
      ext: ".br", // Brotli files extension
      threshold: 10240, // Compress files larger than 10kb
      deleteOriginalAssets: false, // Keep original files alongside compressed versions
    }),
    // Optional: Add gzip compression for fallback support
    compression({
      algorithm: "gzip", // Fallback to gzip if Brotli is not supported
      ext: ".gz",
      threshold: 10240,
      deleteOriginalAssets: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default", // Minify CSS using cssnano
        }),
      ],
    },
  },
  build: {
    minify: "esbuild", // Use Esbuild for JavaScript minification (default in Vite)
    target: "esnext", // Target modern JavaScript features (adjust if needed)
    cssCodeSplit: true, // Split CSS into separate files to reduce file sizes
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Customize code splitting by creating separate chunks for vendor libraries
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.JPG"], // Include JPG files during the build
});
