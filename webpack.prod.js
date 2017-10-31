const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        extractSass,
        new ManifestPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader",
                        }

                    ],
                    fallback: "style-loader"
                })
            }
        ]
    }
});