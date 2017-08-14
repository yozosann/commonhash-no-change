const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    common: ['lodash']
  },
  output: {
    filename: '[name].[chunkhash].js',
    // chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 未被提取？？
          use: 'css-loader'
        })
      }
    ]
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   hot: true,
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   publicPath: '/'
  // },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './sss.js'
      }
    ]),
    new ExtractTextPlugin('styles.css'),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' // 用于提取manifest
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      chunks: 'all'
    })
  ]
}