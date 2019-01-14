const Webpack = require('webpack')
const path = require('path')
const glob = require('glob-all')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')
const PurifyCSS = require('purifycss-webpack')

module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: './'
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
		),
		new Webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		}),
		new HtmlWebpackInlineChunkPlugin({
			inlineChunks: ['manifest']
		}),
		new Webpack.optimize.UglifyJsPlugin()
	]
}
