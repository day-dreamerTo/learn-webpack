const path = require('path')
const Webpack = require('webpack')
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
				// 如果不提取的时候告诉webpack加载样式的方式
				fallback: {
					loader: 'style-loader'
				},
				// 如果提取的话
				use: ['css-loader']
			})
		},
		{
			test: /\.js$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['lodash']
					}
				}
			]	
		} 
	]
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: '[name].min.css',
			// 设置提取的范围 true：提取所有的样式 false: 只提取初始化的不包括异步加载进来的
			allChunks: true
		}),
		// 要放在ExtractTextWebpackPlugin之后
		new PurifyCSS({
			paths: glob.sync([
				path.join(__dirname, './index.html'),
				path.join(__dirname, './src/*.js')
			])
		}),
		new Webpack.optimize.UglifyJsPlugin()
	]
}