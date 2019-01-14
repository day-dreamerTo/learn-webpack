// // ? 使用require.ensure
// // pageA引用了subPageA, subPageB, 而subPageA, subPageB共同引用了moduleA,可以把moduleA放在pageA中
// require.include('./moduleA')
// var page = 'subPageA'
// if (page == 'subPageA') {
// 	// require.ensure(['./subPageA'], function () {
// 	// 	var subPageA = require('./subPageA')
// 	// }, 'subPageA')
// 	import(/* webpackChunkName: 'subPageA'*/'./subPageA')
// 		.then(function(subPageA) {
// 			console.log(subPageA)
// 		})
// } else {
// 	// require.ensure(['./subPageB'], function () {
// 	// 	var subPageA = require('./subPageB')
// 	// }, 'subPageB')
// 	import( /* webpackChunkName: 'subPageB'*/ './subPageB')
// 		.then(function (subPageB) {
// 			console.log(subPageB)
// 		})
// }

// // require.ensure 只会把代码加载到本地并不会执行，所以要再require一次来执行
// require.ensure(['lodash'], function() {
// 	// 这里的require为异步加载
// 	var _ = require('lodash')
// 	_.join(['1', '2'], 3)
// }, 'vendor')

// // 或者
// // require.ensure([], function () {
// // 	// 这里的require为异步加载
// // 	var _ = require('lodash')
// // }, 'vendor')

// ? 使用动态import
var page = 'subPageA'
if (page == 'subPageA') {
	import( /* webpackChunkName: 'subPageA'*/ './subPageA')
		.then(function (subPageA) {
			console.log(subPageA)
		})
} else {
	import( /* webpackChunkName: 'subPageB'*/ './subPageB')
		.then(function (subPageB) {
			console.log(subPageB)
		})
}



