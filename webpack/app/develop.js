const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const getConfig = require('../config');
const commomConfig = require('../common');

const config = merge(commomConfig, {
  entry: [getConfig('appIndex')],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: getConfig('devServer'),
  plugins: [
    new HtmlWebpackPlugin({
      template: getConfig('appHTMLTemplate')
    }),
  ],
});

module.exports = config;
