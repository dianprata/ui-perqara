import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  css: [
    join(currentDir, './assets/css/tailwind.css')
  ],
  alias: {
    '@': currentDir,
    '~': currentDir,
  },
  compatibilityDate: '2024-07-16',
})
