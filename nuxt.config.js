export default {
  target: 'static',
  // target: 'server' used for ssr
  // mode: 'universal',  default value
  // mode: 'spa', -> use ssr: false is better
  // Single page application not good for seo
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hello-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  serverMiddleware: ['~/api/index.js'],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000',
    withCredentials: true,
  },
  auth: {
    strategies: {
      local: {
        user: {
          property: 'user',
        },
        token: {
          property: 'token',
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          user: { url: '/api/me', method: 'get' },
          logout: false,
        },
      },
      redirect: {
        login: '/login',
        logout: '/',
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
