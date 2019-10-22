const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		],
	},
	resolve: {    
		modules: [
			path.resolve(__dirname, 'src'), 
			'node_modules'
		]  
	}
	// plugins: [
	// 	new CleanWebpackPlugin(['dist'])
	// ]
};
