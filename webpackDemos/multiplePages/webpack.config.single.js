const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpack = require('clean-webpack-plugin')

const baseConfig = {
	entry: {
		react: 'react'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].[hash].js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}]
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: 'css/[name].[hash].css'
		}),
		new CleanWebpack(path.resolve(__dirname, 'dist')),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'react',
			minChunks: Infinity
		})
	]
}

// 解构加上默认参数
const generatePage = function ({
	title = '',
	entry = '',
	template = './src/index.html',
	name = '',
	chunks = []
} = {}) {
	return {
		entry,
		plugins: [
			new HtmlWebpackPlugin({
				chunks,
				template,
				title,
				filename: name + '.html'
			})
		]
	}
}

const pages = [
	generatePage({
		title: 'page A',
		entry: {
			a: './src/pages/a'
		},
		name: 'a',
		// 公用代码 + 自己的entry
		chunks: ['react', 'a']
	}),
	generatePage({
		title: 'page B',
		entry: {
			b: './src/pages/b'
		},
		name: 'b',
		// 公用代码 + 自己的entry
		chunks: ['react', 'b']
	}),
	generatePage({
		title: 'page C',
		entry: {
			c: './src/pages/c'
		},
		name: 'c',
		// 公用代码 + 自己的entry
		chunks: ['react', 'c']
	})
]

console.log(merge([baseConfig].concat(pages)))
module.exports = merge([baseConfig].concat(pages))
