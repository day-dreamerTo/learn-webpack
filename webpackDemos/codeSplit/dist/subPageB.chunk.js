webpackJsonp([2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moduleA__ = __webpack_require__(2);

var page = 'subPageB'
if (page == 'subPageA') {
	Promise.all/* import() */([__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 0))
		.then(function (subPageA) {
			console.log(subPageA)
		})
} else {
	new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 1))
		.then(function (subPageB) {
			console.log(subPageB)
		})
}

/* harmony default export */ __webpack_exports__["default"] = ('subPageB');

/***/ })
]);