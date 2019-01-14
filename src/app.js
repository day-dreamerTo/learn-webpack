import './css/base.less'
import './css/a.less'

import {
    componentA
} from './js/a'

let app = document.createElement('div')
app.id = 'app'
app.className = 'app'
let a = document.createElement('div')
a.id = 'a'

document.getElementsByTagName('body')[0].appendChild(app)
app.appendChild(a)

let list = componentA()
a.appendChild(list)
console.log(6666888)
$.get('/msg/index', {
	format: 'cards'
}, function (data) {
	console.log(data)
})

$.get('/users', {}, function (data) {
	console.log(data)
   })

// 当代码出错(非语法错误)时控制台不会报错, 需要手动刷新浏览器
if (module.hot) {
	module.hot.accept(function (err) {
		console.log(err)
	})
	module.hot.accept('./js/a', function () {
		a.removeChild(list)

		let newList = require('./js/a').componentA()
		a.appendChild(newList)
		list = newList
	})
}
