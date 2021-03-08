const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const settings = require('./settings');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
	mode: 'development',
	devServer: {
		port: settings.devServerPort,
		contentBase: path.join(__dirname, '../public'),
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new Dotenv({
			path: './.env.development',
		}),
		new ModuleFederationPlugin({
			name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap',
			},
			shared: ['react', 'react-dom', '@material-ui/core'],
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
