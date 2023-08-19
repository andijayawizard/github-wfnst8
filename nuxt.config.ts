// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  // publicRuntimeConfig: {
  //   API_BASE_URL: process.env.API_BASE_URL || "https://fakestoreapi.com"
  // },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
      apiUrlBitu: process.env.apiUrlBitu,
      apiKeyBitu: process.env.apiKeyBitu,
    },
    // private: {
    //   API_KEY: process.env.API_KEY,
    // },
  }
});
