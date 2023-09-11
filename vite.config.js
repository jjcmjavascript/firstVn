import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@class': '/class',
      '@game': '/class/game'
    }
  }
})
