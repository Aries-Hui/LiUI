const path = require('path')
module.exports = {
  mini: {
    enableSourceMap: false,
  },
  h5: {
    // sourceRoot: 'package/liui',
    enableSourceMap: false,
    enableExtract: false,
    webpackChain: (chain, webpack) => {
      chain.plugins.delete('htmlWebpackPlugin')
      chain.plugins.delete('addAssetHtmlWebpackPlugin')
      chain.merge({
        output: {
          path: path.join(process.cwd(), 'dist', 'liui', 'h5'),
          filename: 'index.js',
          library: {
            name: 'liui',
            type: 'umd',
          },
        },
        externals: {
          classnames: 'commonjs2 classnames',
          '@tarojs/components': 'commonjs2 @tarojs/components',
          '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
        },
      })
    },
  },
}
