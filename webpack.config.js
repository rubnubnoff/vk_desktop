
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [{
			test: /\.sass$/,
			use: [
				'style-loader', 
				MiniCssExtractPlugin.loader, 
				'css-loader', 
				'postcss-loader', 
				'clean-css-loader',
				'sass-loader']
		}, 
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new MiniCssExtractPlugin({filename: 'style.css'})
	]
};