let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry: {
		'pageA': './src/pageA',
		'pageB': './src/pageB',
		'vendor': ['lodash']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2,
			chunks: ['pageA', 'pageB']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manife'],
			minChunks: Infinity // 这个配置保证没其它的模块会打包进 vendor chunk
		})
	]
}