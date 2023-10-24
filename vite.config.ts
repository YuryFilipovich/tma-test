import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './docs'
  },
  base: 'https://yuryfilipovich.github.io/tma-test/'
});
