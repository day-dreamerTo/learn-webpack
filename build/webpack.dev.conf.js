const Webpack = require('webpack')
const proxy = require('./proxy')
const historyFallback = require('./historyfallback')

module.exports = {
	devtool: 'cheap-module-source-map',
	devServer: {
		port: 8081,
		inline: true,
		open: false,
		historyApiFallback: historyFallback,
		proxy: proxy,
		hot: true,
		hotOnly: true,
		overlay: true
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin()
	]
}
