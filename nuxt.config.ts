// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // server: {
  //   port: 3100,
  // },
  css: ['~/assets/css/main.css', '~/assets/css/animate.css', '~/assets/css/tailwind.css'],
  // script: [],
  app: {
    head: {
      title: 'BituNuxt',
      meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }],
      script: [
        { src: '~/assets/js/wow.min.js' },
        { src: '~/assets/js/main.js', body: true }],
      // link: [
      //   { rel: 'stylesheet', href: '~/assets/css/main.css' },
      //   { rel: 'stylesheet', href: '~/assets/css/animate.css' },
      //   { rel: 'stylesheet', href: '~/assets/css/tailwind.css' },
      // ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  modules: ['@nuxt/content'],
  // publicRuntimeConfig: {
  //   API_BASE_URL: process.env.API_BASE_URL || "https://fakestoreapi.com"
  // },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
      apiUrlBitu: process.env.apiUrlBitu,
      apiKeyBitu: process.env.apiKeyBitu,
      apiStrapi: process.env.apiStrapi,
      apiUrlAfl: process.env.apiUrlAfl,
      apiUrlLocal: process.env.apiUrlLocal,
      apiKeyLocal: process.env.apiKeyLocal,
    },
    // private: {
    //   API_KEY: process.env.API_KEY,
    // },
  },
  // head: {
  //   link: [{
  //     rel: 'stylesheet',
  //     href: 'assets/css/animate.css'
  //   }, {
  //     rel: 'stylesheet',
  //     href: 'assets/css/tailwind.css'
  //   }],
  //   script: [{
  //     type: 'module',
  //     src: 'assets/js/wow.min.js'
  //   }]
  // }
});
