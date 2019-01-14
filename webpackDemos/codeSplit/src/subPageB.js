import './moduleA'
var page = 'subPageB'
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

export default 'subPageB'