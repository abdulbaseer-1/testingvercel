import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    https: {
      key: '../config/certificates/key.pem',
      cert: '../config/certificates/cert.pem',
    },
  },
  root: './',
  plugins: [react()],
});
