const path = require("path");
const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    entry: {
        "products": "./assets/js/products.js",
        "checkout": "./assets/js/checkout.js",
    },
    output: {
        filename: "[name].[hash].js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "public/dist")
    },
    plugins: [
        new CleanWebpackPlugin(["public/dist"]),
        new ManifestPlugin({
            writeToFileEmit: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        },
        runtimeChunk: "single"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
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