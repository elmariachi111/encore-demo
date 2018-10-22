const path = require("path");
const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const provide = new webpack.ProvidePlugin({
  $: "cash-dom",
  jQuery: "cash-dom"
});

module.exports = {
  entry: {
    index: "./assets/js/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "/dist/",
    path: path.resolve(__dirname, "public/dist")
  },
  plugins: [
    new CleanWebpackPlugin(["public/dist"]),
    new ManifestPlugin(),
    provide
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  }
};
