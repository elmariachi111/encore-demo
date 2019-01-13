const path = require("path");
const webpack = require("webpack");

const provide = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  'window.jQuery': 'jquery'
});

module.exports = {
  devtool: "sourcemap",
  entry: {
    "products": "./assets/js/products.js",
    "checkout": "./assets/js/checkout.js",
  },
  output: {
    filename: "[name].js",
    publicPath: "/dist/",
    path: path.resolve(__dirname, "public/dist")
  },
  plugins: [
    provide
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
