const webpack = require("webpack");
const axios = require("axios");

module.exports = {
  // Build configuration
  build: {
    // Run ESLINT on save
    extend(config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
    // plugins: [
    //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    // ],
    // vendor: [
    //   'moment'
    // ]
    // postcss: {
    //   // Add plugin names as key and arguments as value
    //   // Install them before as dependencies with npm or yarn
    //   plugins: {
    //     // Disable a plugin by passing false as value
    //     "postcss-url": false,
    //     "postcss-nested": {},
    //     "postcss-responsive-type": {},
    //     "postcss-hexrgba": {}
    //     // require('tailwindcss')('./tailwind.js'),
    //     // require('autoprefixer')
    //   },
    //   preset: {
    //     // Change the postcss-preset-env settings
    //     autoprefixer: {
    //       // grid: true
    //     }
    //   }
    // }
  },
  css: [
    // 'normalize.css/normalize.css',
    // 'swiper/dist/css/swiper.css',
    "~/assets/css/tailwind.css"
  ],

  // Headers of the page
  head: {
    title: "wp-vue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Customize the progress-bar color
  loading: { color: "#F01C25" },

  modules: [
    "@nuxtjs/axios",
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-93904346-3'
    // }]
    // https://github.com/anteriovieira/nuxt-sass-resources-loader
    // ['nuxt-sass-resources-loader', '@/assets/css/vars.scss']
    // https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources"
  ],

  styleResources: {
    scss: [
      "~assets/css/vars.scss" // use underscore "_" & also file extension ".scss"
    ]
  },

  plugins: [
    // { src: '~plugins/getSiteShared.js', ssr: true },
    // { src: '~plugins/swiper.js', ssr: false },
    { src: "~plugins/vue-lazyload", ssr: false },
    { src: "~plugins/vue-scrollto", ssr: false },
    { src: "~plugins/web-font-loader", ssr: false },
    { src: "~plugins/mixins" }
  ],

  // vendor: ['lightgallery.js'],

  // router:{
  //   middleware: ['getClubs']
  // }

  // =====================
  // this will activate ssr for dynamic routes, use payload method as suggested
  // https://nuxtjs.org/api/configuration-generate#routes
  generate: {
    routes: function() {
      return axios
        .get("http://rest.dhq.atlasagency.com.au/wp/wp-json/wp/v2/event")
        .then(res => {
          // console.log(res)
          return res.data.map(event => {
            return {
              route: "/event/" + event.slug,
              payload: event
            };
          });
        });
    }
  }
};
