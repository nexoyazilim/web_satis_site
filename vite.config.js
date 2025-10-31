import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages altında alt klasörde yayın hatalarını ("No routes matched location ...") önlemek için
  // base'i '/' olarak sabitliyoruz. Eğer repoda alt dizin yayını gerekirse router'da basename kullanılmalı.
  base: '/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // strip no prefix; backend already has /api
      }
    }
  }
})
