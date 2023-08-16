import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: './build',
  },
  base: './',
  plugins: [
    react({
      tsDecorators: true,
    }),
  ],
});
