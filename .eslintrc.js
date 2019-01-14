module.exports = {
	root: true,
	extends: 'standard',
	plugins: ['html'],
	env: {
		browser: true,
		node: true
	},
	globals: {
		// 表明$是全局变量
		$: true
	},
	rules: {
		// indent: ['error', 4],
		'indent': 0,
		'no-tabs': 0
	}
}