module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  productionSourceMap: false,
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'DevFestIndia',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#3F51B5',
    msTileColor: '#3F51B5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}

// vue.config.js file to be place in the root of your repository

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/devfest-india-2020/'
    : '/'
}