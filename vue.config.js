
const webpack = require('webpack')

module.exports = {

  publicPath: '/XBoard/',

  outputDir: 'docs',

  assetsDir: '',
  productionSourceMap: false,

  // devServer: {

  //   proxy: {
  //     '/api': {
  //       target: '<url>',
  //       changeOrigin: true
  //     }
  //   }
  // }
  css: {
    loaderOptions: {
      less: {

        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      // path: `${root}/public/assets/`,
      // publicPath: '/lead/assets',
      // filename: `${fileName()}.js`,
      chunkFilename: '[name].[chunkhash].js'
    }
  },
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        'window.Quill': 'quill'
      }]);
  }
}
