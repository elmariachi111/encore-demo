const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map", //inline-source-map,
  output: {
    publicPath: "http://localhost:8080/dist/"
  },
  devServer: {
    host: "localhost",
    publicPath: "/dist/",
    https: false,
    contentBase: "./public/dist",
    hot: true,
    inline: true,

    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
