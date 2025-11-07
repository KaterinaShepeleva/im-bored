import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      'src': path.resolve('src/'),
      'store': path.resolve('src/store/'),
      'assets': path.resolve('src/assets/'),
      'components': path.resolve('src/components/'),
      'constants': path.resolve('src/constants/'),
    },
  },
});
