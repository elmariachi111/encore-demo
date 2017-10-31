const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map', //inline-source-map,
    output: {
        filename: '[name].js'
    },
    devServer: {
        host: "0.0.0.0",
        publicPath: "/dist",
        https: false,
        contentBase: './web/dist',
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader",
                }
            ]
        }]
    }

});