import { defineConfig } from "vite";

export default defineConfig({
    build: {
        // generate .vite/manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: 'src/main.ts',
        },
    },
    server: {
        origin: 'http://127.0.0.1:8080',
    },
});