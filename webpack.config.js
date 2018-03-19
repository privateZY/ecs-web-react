"use strict";

const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./build.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    entry: {
        vendor: commonConfig.vendorLib,
        main: commonConfig.main
    },

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "build/[name].[hash].js",
        chunkFilename: "build/[name].[hash].bundle.js",
        publicPath: "/"
    },

    resolve: commonConfig.resolve,

    module: {
        rules: commonConfig.rules
    },

    plugins: [
        ...commonConfig.htmlTemplate,
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            api: {
                SERVER: JSON.stringify("http://api.beaf.tech")
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        ...commonConfig.commonChunks,
        new UglifyJsPlugin({
            sourceMap: false,
            parallel: true
        })
    ]
};
