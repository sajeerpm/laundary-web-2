import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/laundary-web-2/",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "/laundary-web-2/src"),
      },
    ],
  },
});
