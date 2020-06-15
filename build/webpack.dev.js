const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin-fixed-hashbug');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HardSourceWebpackPlugin({
    //   cacheDirectory: '../node_modules/.cache/hard-source/[confighash]',
    //   configHash: function (webpackConfig) {
    //     return require('node-object-hash')({ sort: false }).hash(webpackConfig);
    //   },
    //   environmentHash: {
    //     root: process.cwd(),
    //     directories: [],
    //     files: ['package-lock.json', 'yarn.lock'],
    //   },
    //   cachePrune: {
    //     maxAge: 7 * 24 * 60 * 60 * 1000,
    //     sizeThreshold: 100 * 1024 * 1024
    //   },
    // })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 8000,
    open: true,
    hot: true,
    overlay: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }, {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/styles/variable.less'),
              path.resolve(__dirname, '../src/assets/styles/mixin.less')
            ]
          }
        }]
    }]
  }
})