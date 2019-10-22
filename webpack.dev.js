const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	entry: './src/app.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
		}),
	],
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8080,
		open: 'chrome', // 'google-chrome' on Linux and 'chrome' on Windows
	},
});
