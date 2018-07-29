const webpack = require('webpack')

module.exports = {
  // Build configuration
  build: {
    // Run ESLINT on save
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    // plugins: [
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // ],
    // vendor: [
    //   'moment'
    // ]
  },
  css: [
    // 'normalize.css/normalize.css',
    'swiper/dist/css/swiper.css',
    '~/assets/css/tailwind.css'
  ],

  // Headers of the page
  head: {
    title: 'wp-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#384D66' },

  modules: [
    '@nuxtjs/axios',
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-93904346-3'
    // }]
    // https://github.com/anteriovieira/nuxt-sass-resources-loader
    ['nuxt-sass-resources-loader', '@/assets/css/vars.scss']
  ],

  plugins: [
    { src: '~plugins/getSiteShared.js', ssr: false },
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/vue-lazyload', ssr: false },
    { src: '~plugins/vue-scrollto', ssr: false },
    { src: '~plugins/web-font-loader', ssr: false },
    { src: '~plugins/mixins' }
  ],

  // vendor: ['lightgallery.js'],

  // router:{
  //   middleware: ['getClubs']
  // }
}
