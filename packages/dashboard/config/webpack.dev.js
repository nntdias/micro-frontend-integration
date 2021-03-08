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
		liveReload: true,
		watchContentBase: true,
	},
	plugins: [
		new Dotenv({
			path: './.env.development',
		}),
		new ModuleFederationPlugin({
			name: 'dashboard',
			filename: 'remoteEntry.js',
			exposes: {
				'./DashboardApp': './src/bootstrap',
			},
			shared: ['react', 'react-dom', '@material-ui/core'],
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
