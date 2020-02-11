class Jquery {
	constructor (selector) {
		let slice = Array.prototype.slice
		let dom = slice.call(document.querySelectorAll(selector))
		let len = dom.length
		for (let i = 0; i < len; i++) {
			this[i] = dom[i]
		}
		this.length = len
		this.selector = selector
	}
}

window.$ = function (selector) {
	return new Jquery(selector)
}

console.log(33)
