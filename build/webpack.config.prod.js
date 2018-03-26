'use strict'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('css-loader')
      }, {
        test: /\.styl$/,
        loader: ExtractTextWebpackPlugin.extract('css-loader!stylus-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("main.css")
  ]
})
