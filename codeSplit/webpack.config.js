let webpack = require('webpack')
let path = require('path')

// ? 使用require.ensure
// module.exports = {
// 	entry: {
// 		'pageA': './src/pageA'
// 	},
// 	output: {
// 		path: path.resolve(__dirname, './dist'),
// 		publicPath: './dist/', // 告诉webpack动态加载进来的代码的路径, 可以是一个绝对地址
// 		filename: '[name].bundle.js',
// 		chunkFilename: '[name].chunk.js'
// 	},
// }
// ? 使用动态import
module.exports = {
	entry: {
		'pageA': './src/pageA',
		'pageB': './src/pageB',
		'vendor': ['lodash']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/', 
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			async: 'async-common',
			children: true, // 在入口的子模块中提取公共代码
			minChunks: 2
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manife'],
			minChunks: Infinity // 这个配置保证没其它的模块会打包进 vendor chunk
		})
	]
}