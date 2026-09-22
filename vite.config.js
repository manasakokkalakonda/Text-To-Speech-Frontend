import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true, // Forces Vite to use port 5174 and errors out if it's already taken
    proxy: {
      // Automatically forwards API requests to your backend on port 5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})