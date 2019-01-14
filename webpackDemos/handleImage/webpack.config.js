const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: './dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(eot|woff2?|ttf|svg)$/,
				use: 'url-loader'
			},
			{
			test: /\.css$/,
			use: ExtractTextWebpackPlugin.extract({
				// 如果不提取的时候告诉webpack加载样式的方式
				fallback: {
					loader: 'style-loader'
				},
				// 如果提取的话
				use: [
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							// 表明后面用到的插件是给postcss使用的
							ident: 'postcss',
							plugins: [
								require('postcss-sprites')({
									spritePath: 'dist/images/sprites'
								}),
								// require('autoprefixer')(),
								require('postcss-cssnext')(),
								require('cssnano')({
									preset: 'default',
								})
							]
						}
					}
				]
			})
		},
		{
			test: /\.(png|jpg|jpeg|gif)$/,
			use: [
				// {
				// 	loader: 'file-loader',
				// 	options: {
				// 		// useRelativePath: true,
				// 		publicPath: './images',
				// 		outputPath: 'images/'
				// 	}
				// },
				{
					loader: 'url-loader',
					options: {
						name: '[name].min.[ext]',
						limit: 10000,
						// useRelativePath: true,
						publicPath: './images',
						outputPath: 'images/'
					}
				},
				{
					loader: 'img-loader',
					options: {
						plugins: [
							// require('imagemin-optipng')({}),
							require('imagemin-pngquant')({
								qulity: '80'
							})
						]
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
		})
	]
}