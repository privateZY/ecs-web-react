"use strict";

const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./build.common");
module.exports = {
    devtool: "eval-source-map",

    entry: {
        vendor: commonConfig.vendorLib,
        main: commonConfig.main
    },

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "build/[name].js",
        chunkFilename: "build/[name].bundle.js",
        publicPath: "/"
    },

    resolve: commonConfig.resolve,

    module: {
        rules: commonConfig.rules
    },

    plugins: [
        ...commonConfig.htmlTemplate,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            },
            api: {
                SERVER: JSON.stringify("http://127.0.0.1:4567")
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        ...commonConfig.commonChunks
    ]
};
