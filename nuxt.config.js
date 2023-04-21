export default {
  loading:{
    color:'#231F20',
    height:'4px',
    throttle: 0
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frassessoria',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/global.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // [
    //   '@nuxtjs/recaptcha', {
    //     recaptcha: {
    //       hideBadge: Boolean, // Hide badge element (v3 & v2 via size=invisible)
    //       language: String,   // Recaptcha language (v2)
    //       siteKey: String,    // Site key for requests
    //       version: Number,     // Version
    //       size: String        // Size: 'compact', 'normal', 'invisible' (v2)
    //     },
    //   }
    // ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
