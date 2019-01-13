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
        //inline: true,
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
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
                    "sass-loader",

                ]
            },
        ]
    }
});