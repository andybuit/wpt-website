const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = withImages(withCSS({
  distDir: "../.next",
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}));



// module.exports = {
//   distDir: "../dist",
//   publicRuntimeConfig: {
//     localeSubpaths:
//       typeof process.env.LOCALE_SUBPATHS === "string"
//         ? process.env.LOCALE_SUBPATHS
//         : "none"
//   },
// };

