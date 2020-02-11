const Webpack = require('webpack')
const proxy = require('./proxy')
const historyFallback = require('./historyfallback')

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		port: 8081,
		inline: true,
		open: false,
		historyApiFallback: historyFallback,
		proxy: proxy,
		hot: true,
		hotOnly: false,
		overlay: true,
		host: '0.0.0.0'
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin()
	]
}
