const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const devConfig = {
	mode: 'development',
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, '../public'),
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new Dotenv({
			path: './.env.development',
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
