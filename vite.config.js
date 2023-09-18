import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@class': '/src/class',
      '@game': '/src/class/game'
    }
  }
})
