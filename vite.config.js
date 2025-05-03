import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Ensure PDF files are handled as assets
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
