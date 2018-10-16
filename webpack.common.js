const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const provide = new webpack.ProvidePlugin({
    $: 'cash-dom',
    jQuery: 'cash-dom'
})

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        index: './app/Resources/public/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'web/dist')
    },
    plugins: [
        new CleanWebpackPlugin(['web/dist']),
        new ManifestPlugin(),
        provide,
        extractSass
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            minimize: process.env.NODE_ENV === "production"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }

                ],
                fallback: "style-loader"
            })
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "fonts/",
                },
            }]
        }]
    }
};