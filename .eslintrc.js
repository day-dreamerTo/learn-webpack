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
		'no-tabs': 0,
		'no-unused-vars': 0,
		'no-trailing-spaces': 0,
		'space-before-function-paren': 0
	}
}