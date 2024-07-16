import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  css: [
    resolve('./assets/css/tailwind.css'),
  ],
  alias: {
    '@': resolve('./'),
    '~': resolve('./'),
  },
  compatibilityDate: '2024-07-16',
})
