import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@share": path.resolve(__dirname, "./src/share"),
    },
  },
});
