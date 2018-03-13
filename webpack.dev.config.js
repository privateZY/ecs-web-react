"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	devtool: "eval-source-map",
	
	entry: {
		vendor: ["babel-polyfill","react","react-dom","mobx","mobx-react","axios", "react-motion", "styled-components"],
		main: ["babel-polyfill", __dirname + "/src/index.js"]
	},
	
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "build/[name].js",
		chunkFilename: "build/[name].bundle.js",
		publicPath: "/"
	},
	
	resolve: {
		modules: ["node_modules", path.resolve(__dirname, "src")],
		extensions: [".js", ".json", ".jsx"]
	},
	
	module: {
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
							name: "build/[hash:8].[name].[ext]"
						}
					}
				]
			}
		]
	},
	
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, "public/build")]),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, "public/index.html"),
			template: path.resolve(__dirname, "index.ejs")
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			},
			"api": {
				SERVER: JSON.stringify("http://127.0.0.1:4567")
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // Specify the common bundle's name.
			minChunks: Infinity
		})
	]
};
