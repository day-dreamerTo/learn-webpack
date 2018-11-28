
// ? 正常使用
// import './css/base.css'
// import './css/common.css'

// ? style-loader  useable属性
// import base from './css/base.css'
// import common from './css/common.css'

// var flag = false

// setInterval(() => {
// 	if (flag) {
// 		base.unuse()
// 	} else {
// 		base.use()
// 	}
// 	flag = !flag
// }, 1000);

// ? 使用css-modules
import base from './css/base.css'
// import common from './css/common.css'

var app = document.getElementById('app')
app.innerHTML = '<div class="' + base.box + '"></div>'