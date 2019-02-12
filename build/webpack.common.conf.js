const path = require('path')
const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')

const Webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const generateConfig = env => {
	const extractLess = new ExtractTextWebpackPlugin({
		filename: 'css/[name]-[hash:5].min.css',
		allChunks: true
	})

	const scriptLoader = ['babel-loader']
		.concat(env === 'production'
			? []
			: [{
				loader: 'eslint-loader',
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			}]
		)

	const cssLoaders = [
		{
			loader: 'css-loader',
			options: {
				sourceMap: env === 'development'
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				sourceMap: env === 'development',
				plugins: [require('postcss-cssnext')()]
			}
		},
		{
			loader: 'less-loader',
			options: {
				sourceMap: env === 'develpment'
			}
		}
	]

	const styleLoader = env === 'production'
			? extractLess.extract({
				fallback: 'style-loader',
				use: cssLoaders
			})
			: ['style-loader']
			.concat(cssLoaders)

	const fileLoader = env === 'production'
	? [{
			loader: 'file-loader',
			options: {
				name: '[name]-[hash:5].[ext]',
				outputPath: 'images/'
			}
	}]
	: [{
		loader: 'url-loader',
		options: {
			name: '[name]-[hash:5].[ext]',
			limit: 1000,
			outputPath: 'images/'
		}
	}]

	return {
		entry: {
			app: './src/app.js'
		},
		output: {
			filename: 'js/[name]-bundle-[hash:5].js'
		},
		resolve: {
			alias: {
				jquery$: path.resolve(__dirname, '../src/libs/jquery.min.js')
			}
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [path.resolve(__dirname, '../src')],
					exclude: [path.resolve(__dirname, '../src/libs'), path.resolve(__dirname, '../dist')],
					use: scriptLoader
				},
				{
					test: /\.less$/,
					use: styleLoader
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/,
					use: fileLoader.concat(
						env === 'production'
						? {
							loader: 'img-loader',
							options: {
								plugins: [
									require('imagemin-pngquant')({
										qulity: '80'
									})
								]
							}
						}
						: []
					)
				},
				{
					test: /\.(eot|woff2?|ttf|svg)$/,
					use: fileLoader
				}
			]
		},
		plugins: [
			extractLess,
			new HtmlWebpackPlugin(),
			new Webpack.ProvidePlugin({
				$: 'jquery'
			}),
			new BundleAnalyzerPlugin()
		]
	}
}

module.exports = env => {
	let config = env === 'production'
	? productionConfig
	: developmentConfig

	return merge(generateConfig(env), config)
}
