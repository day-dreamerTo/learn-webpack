// class State {
// 	constructor (color) {
// 		this.color = color
// 	}
// 	handle(context) {
// 		console.log(`turn to ${this.color} light`)
// 		context.setState(this)
// 	}
// }
// class Context {
// 	constructor() {
// 		this.state = null
// 	}
// 	getState() {
// 		return this.state 
// 	}
// 	setState(state) {
// 		this.state = state
// 	}
// }
// let context = new Context()

// let green = new State('green')
// let yellow = new State('yellow')
// let red = new State('red')

// green.handle(context)
// console.log(context.getState())

// yellow.handle(context)
// console.log(context.getState())

// red.handle(context)
// console.log(context.getState())

import StateMachine from 'javascript-state-machine'
// 初始化状态机模型
let fsm = new StateMachine({
	init: '收藏',
	transitions: [
		{
			name: 'doStore',
			from: '收藏',
			to: '取消收藏'
		},
		{
			name: 'deleteStore',
			from: '取消收藏',
			to: '收藏'
		}
	],
	methods: {
		// 监听执行收藏
		onDoStore: function() {
			alert('收藏成功')// 可以做post请求
			updateText()
		},
		// 监听取消收藏
		onDeleteStore: function() {
			alert('已经取消收藏') // post
			updateText()
		}
	}
})

let $btn = $('#btn1')
$btn.click(function() {
	if (fsm.is('收藏')) {
		fsm.doStore()
	} else {
		fsm.deleteStore()
	}
})
// 修改按钮文案
function updateText() {
	$btn.text(fsm.state)
}

// 初始化文案
$btn.text('收藏')
