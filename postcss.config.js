// https://github.com/nuxt/nuxt.js/tree/dev/examples/tailwindcss
module.exports = {
    plugins: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ]
  }