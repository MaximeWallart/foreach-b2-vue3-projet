import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import autoimport from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'url'
import pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    Inspect(),
    vueI18n({
      include: resolve(__dirname, './locales/**')
    }),
    Icons(),
    autoimport({ imports: ['vue', 'vue-i18n', 'vue-router'] ,dts: 'src/auto-imports.d.ts' }),
    pages(),
    WindiCSS(),
  ]
})
