import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/pages': resolve(__dirname, 'src/pages'),
      '@/router': resolve(__dirname, 'src/router'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://www.xxx.xxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        //内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
