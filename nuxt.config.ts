export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    '@nuxtjs/google-fonts', // Add the google fonts module
  ],
  googleFonts: {
    families: {
      Manrope: [400, 600],  // Include the font weights you want
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "ru", name: "Russian", file: "ru.json" },
      { code: "kk", name: "Kazakh", file: "kz.json" },
    ],
    strategy: 'prefix_except_default',  // Prefix routes except for the default locale
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "https://api.tanday.kz/api/v1",
      accessTokenLifetime:
        process.env.NUXT_PUBLIC_ACCESS_TOKEN_LIFETIME || "86400",
    },
  },
});
