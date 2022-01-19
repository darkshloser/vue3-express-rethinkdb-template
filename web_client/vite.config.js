import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue' // vue 3
// import { createVuePlugin as vue } from "vite-plugin-vue2"; //vue 2
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3030
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});