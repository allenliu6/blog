'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const manifest = require('./dll/vendor-manifest.json')
const webpack = require('webpack')
var HappyPack = require('happypack');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory=true'],
        include: [resolve('src'), resolve('test')],
        exclude: [path.resolve('../../node_modules')] // 不需要编译node_modules下的js 
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
        include: [resolve('src')],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        },
        include: [resolve('src')],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        },
        include: [resolve('src')],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        include: [resolve('src')],
      },
      {
        test: /\.js$/,
        loader: ['happypack/loader?id=happybabel'],
        include: [resolve('src')]
      },
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest,
    }),
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader'],
      threads: 4,//HappyPack 使用多少子进程来进行编译
    }),
    new HappyPack({
      id: 'postcss',
      threads: 4,
      loaders: [
        'css-loader',
        'postcss-loader',
      ],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'shared-module',
      minChunks: (module, count) => (
        count >= 2    // 当一个模块被重复引用2次或以上的时候单独打包起来。 
      )
    }),
  ],
  cache: true,
}
