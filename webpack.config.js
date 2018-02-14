const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'webpack-dev-server': 'webpack-dev-server/client?http://localhost:4898',
    'only-dev-server': 'webpack/hot/only-dev-server',
    main:  './src/styles/main.scss',
    index: './src/Components/index.js'
  },

  output: {
    path:               resolve(__dirname, 'dist'),
    publicPath:         '/',
    filename:          '[name].js',
    sourceMapFilename: '[name].map'
  },

  context: resolve(__dirname, './'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
          ],
        }),
      },
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=15000' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    //new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
