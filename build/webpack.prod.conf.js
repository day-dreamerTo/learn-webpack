// const Webpack = require('webpack')
const path = require('path')
const glob = require('glob-all')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')
const PurifyCSS = require('purifycss-webpack')

module.exports = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: './'
	},
	optimization: {
		splitChunks: {
			// chunks: 'all'
			cacheGroups: {
				vendors: {
					chunks: 'all',
					test: /(jquery|react|lodash)/,
					name: 'vendors'
				}
			}
		},
		runtimeChunk: true
	},
	plugins: [
		new PurifyCSS({
			paths: glob.sync([
				// path.join(__dirname, '../index.html'),
				path.join(__dirname, '../src/*.js'),
				path.join(__dirname, '../src/js/*.js')
			]),
			minimize: true,
			verbose: true
		}),
		new CleanWebpackPlugin(
			['dist'], {
				root: path.resolve(__dirname, '../'),
				verbose: true, // 是否启用控制台输出信息
				dry: false // 设置为false,启用删除文件
			}
		)
		// ? 没有针对webpack4做更新？
		// new HtmlWebpackInlineChunkPlugin({
		// 	inlineChunks: ['manifest']
		// })
		// new Webpack.optimize.UglifyJsPlugin()
	]
}
