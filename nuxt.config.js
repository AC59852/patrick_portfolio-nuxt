import smConfig from "./sm.json";
import site from "./siteData.json";
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
      { hid: 'og:title', name: 'og:title', content: 'Patrick Bradley | UX/UI Designer' },
      { hid: 'og:image', name: 'og:image', content: "~/assets/icons/seo_photo.png" },
      { hid: 'og:image:alt', name: 'og:image:alt', content: `Hand drawn photo of Patrick Bradley` },
      { hid: 'description', name: 'description', content: 'Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Patrick Bradley' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: site.link + 'icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
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
    },
    icon: {
      fileName: './icon.png',
    },
    theme_color: '#ffffff',
    name: 'PB Portfolio',
    author: 'Patrick Bradley',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },

  googleFonts: {
    families: {
      'DM+Sans': {
        wght: ['400', '600', '700'],
        ital: ['400', '600', '700']
      }
    }
  }
}
