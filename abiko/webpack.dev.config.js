const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
	entry: "./src/abiko.js",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "http://localhost:9002/",
	},
	mode: "development",
	devServer: {
		port: 9002,
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		devMiddleware: {
			index: "abiko.html",
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024,
					},
				},
			},
			{
				test: /\.txt/,
				type: "asset/source",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: ["handlebars-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: "abiko.html",
			title: "Abiko",
			template: "src/page-template.hbs",
			description: "Abiko",
			minify: false,
		}),
		new ModuleFederationPlugin({
			name: "AbikoApp",
			filename: "remoteEntry.js",
			exposes: {
				"./AbikoPage": "./src/components/abiko-page/abiko-page.js",
			},
			remotes: {
				ImageCaptionApp: "ImageCaptionApp@http://localhost:9003/remoteEntry.js",
			},
		}),
	],
};
