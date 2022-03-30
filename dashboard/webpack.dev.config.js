const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
	entry: "./src/dashboard.js",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "http://localhost:9000/",
	},
	mode: "development",
	devServer: {
		port: 9002,
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		index: "dashboard.html",
		historyApiFallback: {
			index: "dashboard.html",
		},
	},
	module: {
		rules: [
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
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: "dashboard.html",
			title: "Dashboard",
		}),
		new ModuleFederationPlugin({
			name: "App",
			remotes: {
				HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
				AbikoApp: "AbikoApp@http://localhost:9002/remoteEntry.js",
			},
		}),
	],
};
