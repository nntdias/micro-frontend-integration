const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: {
		main: ['@babel/polyfill', path.resolve('./src/index.js')],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							generator: content => svgToMiniDataURI(content.toString()),
						},
					},
				],
				type: 'javascript/auto',
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				use: {
					loader: 'url-loader',
					options: {
						limit: '10000',
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				type: 'javascript/auto',
			},
		],
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, '../src'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ESLintPlugin(),
	],
};
