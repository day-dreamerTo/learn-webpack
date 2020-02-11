module.exports = {
	// '/.+': {
	// 	target: 'https://m.weibo.cn',
	// 	changeOrigin: true,
	// 	logLevel: 'debug',
	// 	pathRewrite: {
	// 		'^/users': 'api/users/show'
	// 	},
	// 	headers: {
	// 		Cookie: '_T_WM=978b7a74740abc57d53fae51be085262; WEIBOCN_FROM=1110006030; SUB=_2A25xIbZUDeRhGeVP61sV9ivLzDuIHXVS7docrDV6PUJbkdAKLWfRkW1NTXVKOTQpxjdFo5WfHW2gq_LTVP0JO4gr; SUHB=0cSnC9j0uoOTiR; SCF=AnNZgk03nnQgC2ao_3ItTxVPiwulk3D0_xyq3vIjcKyW78KGdw9yCnvamlIKKezNb5T50Ib_fAhuf4msInbQSJw.; SSOLoginState=1545979395; MLOGIN=1; M_WEIBOCN_PARAMS=lfid%3D102803%26luicode%3D20000174%26uicode%3D20000174'
	// 	}
	// }
	'/api/*': {
		target: 'http://localhost:8880'
	}
}
