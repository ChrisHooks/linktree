import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/linktree/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true, // Clean dist folder before build
  },
  server: {
    port: 3000,
    open: true,
    hmr: true, // Enable Hot Module Replacement
    watch: {
      // Watch for changes in these files/directories
      include: ['src/**/*', 'public/**/*'],
      // Ignore node_modules and dist
      ignored: ['**/node_modules/**', '**/dist/**']
    }
  },
  // Enable file watching in build mode
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})