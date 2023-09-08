/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
      '@compound': path.resolve(__dirname, './src/components/compound'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetsInfo) => {
          return /.\.css$/.test(assetsInfo.name) ? `assets/[name]-[hash].[ext]` : `assets/[name].[ext]`;
        },
      },
    },
  },
});

