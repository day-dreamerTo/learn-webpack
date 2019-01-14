module.exports = {
	// 当只有是html时才重写rewrite规则
	htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
	rewites: [
		{
			from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
			to: function (context) {
				return '/' + context.match[1] + context.match[2]
			}
		}
	]
}
