const path = require('path');
const {
  merge,
} = require('webpack-merge');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: process.env.PORT || 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
