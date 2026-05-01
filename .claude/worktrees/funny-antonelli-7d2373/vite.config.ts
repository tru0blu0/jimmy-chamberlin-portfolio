import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /portfolio/ subdirectory.
  // When using a custom domain, change this to '/'.
  base: '/portfolio/',
})
