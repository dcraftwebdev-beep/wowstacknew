import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// Path aliases keep imports clean and refactor-safe.
// Mirror any change here in jsconfig.json so the editor resolves them too.
const alias = {
  "@": "./src",
  "@app": "./src/app",
  "@assets": "./src/assets",
  "@components": "./src/components",
  "@features": "./src/features",
  "@pages": "./src/pages",
  "@seo": "./src/seo",
  "@hooks": "./src/hooks",
  "@lib": "./src/lib",
  "@services": "./src/services",
  "@store": "./src/store",
  "@styles": "./src/styles",
  "@constants": "./src/constants",
  "@config": "./src/config",
  "@data": "./src/data",
};

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: Object.fromEntries(
      Object.entries(alias).map(([key, path]) => [
        key,
        fileURLToPath(new URL(path, import.meta.url)),
      ])
    ),
  },

  css: {
    devSourcemap: true,
    modules: {
      // Readable, collision-free class names: .Button_root__a1b2c
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]_[local]__[hash:base64:5]",
    },
  },

  server: {
    port: 5173,
    watch: { usePolling: true },
  },

  build: {
    sourcemap: true,
    outDir: "dist",
  },
});
