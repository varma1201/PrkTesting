import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress", // Using Brotli for better compression
      threshold: 10240, // Compress files larger than 10kb
      deleteOriginalAssets: false, // Keep original assets
    }),
  ],
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default", // Enable CSS minification
        }),
      ],
    },
  },
  build: {
    minify: "terser", // Enable JavaScript minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
      },
      mangle: {
        properties: {
          regex: /^_/, // Mangle only properties starting with _
        },
      },
    },
    cssCodeSplit: true, // Ensure CSS is split into separate files
  },
  assetsInclude: ["**/*.JPG"], // Include JPG files in the
});
