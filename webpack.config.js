'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "app/build"),
    publicPath: "/app/build/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}