import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), viteTsconfigPaths()],
  server: {
    port: 3000
  },
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude],
    setupFiles: "./tests/setup.ts",
    include: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    coverage: {
      include: ["src/**"],
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        "src/**/index.ts",
        "src/services/*",
        "src/layout/*",
        "src/pages/*",
        "src/types/*",
        "src/assets/**"
      ]
    }
  }
});
