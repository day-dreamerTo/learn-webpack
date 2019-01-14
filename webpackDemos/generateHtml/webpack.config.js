const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')

module.exports = {
	entry: {
		app: './src/app.js',
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(jpg|jpeg|png|svg|)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							outputPath: 'images/'
						}
					}
				]
			},
			{
				// test: /\.html$/,
				// use: [
				// 	{
				// 		loader: 'html-loader',
				// 		options: {
				// 			attrs: ['img:src', 'img:data-src']
				// 		}
				// 	}
				// ]
			},
			{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
				// 如果不提取的时候告诉webpack加载样式的方式
				fallback: {
					loader: 'style-loader'
				},
				// 如果提取的话
				use: [{
						loader: 'css-loader',
						options: {
							// minimize: true,
							modules: true,
							localIdentName: '[path][name]_[local]_[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							// 表明后面用到的插件是给postcss使用的
							ident: 'postcss',
							plugins: [
								// require('autoprefixer')(),
								require('postcss-cssnext')(),
								require('cssnano')({
									preset: 'default',
								})
							]
						}
					}
				]
			})
		}]
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: '[name].min.css',
			// 设置提取的范围 true：提取所有的样式 false: 只提取初始化的不包括异步加载进来的
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		}),
		new HtmlWebpackInlineChunkPlugin({
			inlineChunks: ['manifest']
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			// chunks: ['app', 'index'],
			minify: {
				collapseWhitespace: true
			}
		})
	]
}