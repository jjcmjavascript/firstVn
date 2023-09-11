import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@classes': '/classes',
      '@game': '/classes/game'
    }
  }
})
