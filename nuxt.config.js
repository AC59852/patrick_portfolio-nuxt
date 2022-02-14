import smConfig from "./sm.json";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/patrick_portfolio-nuxt/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Patrick Bradley',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Patrick Bradley is a UX/UI Designer from London, Ontario focusing on simplifying user interfaces using wireframes and prototypes to produce user friendly, engaging responsive websites and mobile applications.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Patrick Bradley' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint || "",
    }], ["nuxt-sm"]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
}
