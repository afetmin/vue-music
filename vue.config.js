const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets')
      }
    }
  },
}
