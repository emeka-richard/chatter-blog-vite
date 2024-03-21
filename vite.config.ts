/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  // optimizeDeps: {
  //   disabled: false,
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup',
    mockReset: true,
    include:['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    includeSource: ['**/.env/**'],
    // environment: 'node',
    update: true,
    exclude:['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*']
  }
});