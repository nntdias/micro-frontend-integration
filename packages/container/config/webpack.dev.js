const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const settings = require('./settings');

const devConfig = {
	mode: 'development',
	devServer: {
		port: settings.devServerPort,
		contentBase: path.join(__dirname, '../public'),
		historyApiFallback: {
			index: 'index.html',
		},
		open: true,
		liveReload: true,
		watchContentBase: true,
	},
	plugins: [
		new Dotenv({
			path: './.env.development',
		}),
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				auth: 'auth@http://localhost:8081/remoteEntry.js',
				dashboard: 'dashboard@http://localhost:8082/remoteEntry.js',
			},
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
