var path = require('path')

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
		rules: [
			{
				test: /\.css$/,
				use: [
					// ? 使用<style>标签
					// {
					// 	loader: 'style-loader'
					// },
					// {
					// 	loader: 'css-loader'
					// }
					// ? url属性，使用<link>标签，不常用，因为会打出多个css包，网络请求会增多
					// {
					// 	loader: 'style-loader/url'
					// },
					// {
					// 	loader: 'file-loader'
					// },
					// ? useable属性
					// {
					// 	loader: 'style-loader/useable'
					// },
					// {
					// 	loader: 'css-loader'
					// }
					// ? options.transform
					// {
					// 	loader: 'style-loader',
					// 	options: {
					// 		insertInto: '#app',
					// 		singleton: true,
					// 		transform: './css.transform.js'
					// 	}
					// },
					// {
					// 	loader: 'css-loader'
					// },
					// ? css-modules
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader', 
						options: {
							minimize: true,
							modules: true,
							// 修改css-modules中使用到的类名
							localIdentName: '[path][name]_[local]_[hash:base64:5]'
						} 
					}
				]
			}
		]
	}
}