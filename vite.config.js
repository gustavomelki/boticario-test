import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/sass/animations/_animations.scss";
          @import "./src/sass/animations/_index.scss";
          @import "./src/sass/animations/_transitions.scss";
        `,
      },
    },
  },
});
