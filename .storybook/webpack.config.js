const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|mp3|wav|ogg|svg)$/,
        loader:  'url-loader'
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader'
      // }
    ]
  }
};
