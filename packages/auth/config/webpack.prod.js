const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
	mode: 'production',
	output: {
		filename: 'static/js/[name].[contenthash].js',
		chunkFilename: 'static/js/[name].[contenthash].chunk.js',
		publicPath: '/container/latest/',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new Dotenv({
			path: './.env.production',
		}),
		new OptimizeCSSAssetsPlugin({
			cssProcessorOptions: {
				parser: safePostCssParser,
				map: false,
			},
			cssProcessorPluginOptions: {
				preset: ['default', { minifyFontValues: { removeQuotes: false } }],
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash].css',
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
