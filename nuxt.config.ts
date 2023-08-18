// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  runTimeConfig: {
    public: {
      NUXT_API_URL: process.env.NUXT_API_URL,
      NUXT_API_KEY: process.env.NUXT_API_KEY,
    }
  }
});
