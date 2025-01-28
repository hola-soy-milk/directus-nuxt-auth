// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  routeRules: {
    "/directus/**": { proxy: import.meta.env.API_URL },
  },
  devtools: { enabled: true }
})
