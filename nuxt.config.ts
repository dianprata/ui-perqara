import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: join(currentDir, './components/ui'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: ''
    },
  ],
  css: [
    join(currentDir, './assets/css/tailwind.css')
  ],
  alias: {
    '@': currentDir,
    '~': currentDir,
  },
  compatibilityDate: '2024-07-16',
})
