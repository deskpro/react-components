const path    = require('path');
const webpack = require('webpack');

const config = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../../')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../../')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.(svg|png|jpg|mp3|wav|ogg)$/,
        loader:  'url'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src/tests')
    ]
  }
};

module.exports = config;
