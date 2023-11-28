import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/scss/_variables.scss";
        @import "./src/scss/_mixins.scss";
      `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
