const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');


const provide = new webpack.ProvidePlugin({
    $: 'cash-dom',
    jQuery: 'cash-dom'
})

module.exports = {
    entry: {
        index: './app/Resources/public/js/index.js'
    },
    output: {
        filename: '[name].js',
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'web/dist')
    },
    plugins: [
        new CleanWebpackPlugin(['web/dist']),
        provide
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
                    name: "[name].[ext]",
                    outputPath: "fonts/",
                },
            }]
        }]
    }
};