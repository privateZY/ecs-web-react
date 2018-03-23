const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    main: ["babel-polyfill", __dirname + "/src/index.js"],

    vendorLib: [
        "babel-polyfill",
        "react",
        "react-dom",
        "mobx",
        "mobx-react",
        "axios",
        "react-motion",
        "styled-components",
        "react-router-dom",
        "react-toastify",
        "moment"
    ],
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "src")],
        extensions: [".js", ".json", ".jsx"]
    },
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, "src")],
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "build/img/[hash:8].[name].[ext]"
                    }
                }
            ]
        }
    ],
    htmlTemplate: [
        new CleanWebpackPlugin([path.resolve(__dirname, "public/build")]),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "public/index.html"),
            template: path.resolve(__dirname, "index.ejs"),
            createTime: new Date().toDateString()
        })
    ],
    commonChunks: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
};
