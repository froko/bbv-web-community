// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt'],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      title: 'Luzerner Solo und Ensemble Wettbewerb',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Luzerner Solo und Ensemble Wettbewerb' },
        { name: 'author', content: 'bbv Software Services AG' }
      ]
    }
  }
});
