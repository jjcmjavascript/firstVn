import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@class': path.resolve(__dirname, 'src/class'),
      '@game': path.resolve(__dirname, 'src/class/game'),
      '@canvas': path.resolve(__dirname, 'src/class/canvas'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
