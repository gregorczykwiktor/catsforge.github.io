import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // publicPath: process.env.NODE_ENV === "production" ? "/catsforge.github.io/" : "/",
  // homepage: "https://gregorczykwiktor.github.io/",
  base: '/catsforge.github.io',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
