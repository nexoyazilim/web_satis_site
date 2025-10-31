import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/web_satis_site/' : '/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://nexoyazilim-api.us-east-1.elasticbeanstalk.com',        changeOrigin: true,
        secure: false,
        // strip no prefix; backend already has /api
      }
    }
  }
})
