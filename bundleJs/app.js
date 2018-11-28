import sum from './sum'

var minus = require('./minus')
// 因为AMD是异步加载，会单独形成一个chunk，所以打包之后又两个文件
require(['./multi'], function(multi) {
	console.log('multi(2, 3) = ', muti(2, 3))
})

console.log('sum(2, 3) = ', sum(2, 3))
console.log('minus(2, 3) = ', minus(2, 3))
