import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), vanillaExtractPlugin({ emitCssInSsr: true })],
    server: {
        // host: true,
    },
});
