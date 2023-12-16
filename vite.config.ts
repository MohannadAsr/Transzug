import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@components': path.resolve('src/components'),
      '@plugins': path.resolve('src/plugins'),
      '@hooks': path.resolve('src/hooks'),
      '@': path.resolve('src/'),
    },
  },
});
