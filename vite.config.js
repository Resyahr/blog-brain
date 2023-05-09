import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible"
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  envPrefix: "VITE_",
  plugins: [react(), envCompatible],
});
