import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        sand:    resolve(__dirname, 'games/sand-coloring/index.html'),
        untitled:resolve(__dirname, 'games/untitled/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
