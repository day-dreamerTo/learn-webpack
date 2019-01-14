const express = require('express')
const webpack = require('webpack')
const opn = require('opn')

const app = express()
const port = 3000

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const config = require('./webpack.common.conf')('development')
const compiler = webpack(config)

const proxyTable = require('./proxy')
console.log(proxyTable)
// 把每一个proxy的选项都应用到express上
for (let context in proxyTable) {
	console.log(context)
	app.use(proxyMiddleware(context, proxyTable[context]))
}

app.use(historyApiFallback(require('./historyfallback')))

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.listen(port, function () {
	console.log(`success listen to ` + port)
	opn('http://localhost:' + port)
})
