/* eslint-disable no-undef */
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/js/app.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './index.html' }),
	],
	module: {
		rules: [{
			test: /\.(css)$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								autoprefixer
							]
						}
					}
				},
				{
					loader: 'sass-loader'
				}
			]
		}, {
			test: /\.css$/i,
			exclude: /styles/,
			use: ['to-string-loader', 'css-loader']
		}]
	}
};