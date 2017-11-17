const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    //你需要引入的第三方库文件
    vendor: ['vue', 'vuex', 'vue-router', 'axios', 'marked']
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].js',
      name: '[name]',
    }),
  ]
};