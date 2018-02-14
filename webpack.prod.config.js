const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',

  entry: {
    main:     './src/styles/main.scss',
    index:    './src/Components/index.js',
    utils:    './src/utils/index.js',
    bindings: './src/bindings',
  },

  context: resolve(__dirname, './'),

  output: {
    path:              resolve(__dirname, 'dist'),
    publicPath:        '',
    filename:          '[name].js',
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle:   {
        screw_ie8:   true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
  ],

  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test:    /\.less$/,
        exclude: /node_modules/,
        use:     ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      [
            'css-loader',
            { loader: 'less-loader', options: { sourceMap: true } },
          ],
        }),
      },
      {
        test:    /\.scss$/,
        exclude: /node_modules/,
        use:     ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      [
            'css-loader',
            { loader: 'sass-loader', options: { sourceMap: true } },
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

  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
