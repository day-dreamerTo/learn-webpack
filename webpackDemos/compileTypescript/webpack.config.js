module.exports = {
	entry: {
		'app': './app.ts'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				//'?'表示可有可无
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader'
				}
			}
		]
	}
}