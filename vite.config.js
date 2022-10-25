import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input:[
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildCommonjs(['react-moment'])],
        },
    },
});
