import { execSync } from 'node:child_process'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function writeLinksHtml(): Plugin {
  return {
    name: 'write-links-html',
    apply: 'build',
    closeBundle() {
      execSync('node scripts/write-links-html.mjs', { stdio: 'inherit' })
    },
  }
}

export default defineConfig({
  plugins: [react(), writeLinksHtml()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: 'localhost',
    port: 4173,
  },
  build: {
    sourcemap: false,
  },
})
