// 该函数不是在打包的时候执行的，而是loader把样式塞到html时执行, 从而可以拿到浏览器的信息
module.exports = function(css) {
	console.log(css)
	if (window.innerWidth >= 768) {
		return css.replace('red', 'green')
	} else {
		return css.replace('red', 'orange')
	}
}