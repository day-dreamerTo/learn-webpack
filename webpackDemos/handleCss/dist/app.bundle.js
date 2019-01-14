/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_base_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_base_css__);

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

// import common from './css/common.css'

var app = document.getElementById('app')
app.innerHTML = '<div class="' + __WEBPACK_IMPORTED_MODULE_0__css_base_css__["default"].box + '"></div>'

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: composition is only allowed when selector is single :local class name not in \".box\", \".box\" is weird\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/postcss-modules-scope/lib/index.js:26:13\n    at Array.map (<anonymous>)\n    at getSingleLocalNamesForComposes (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/postcss-modules-scope/lib/index.js:20:26)\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/postcss-modules-scope/lib/index.js:106:26\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:198:28\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:148:26\n    at Rule.each (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:114:22)\n    at Rule.walk (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:147:21)\n    at Rule.walkDecls (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:196:25)\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/postcss-modules-scope/lib/index.js:105:12\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:241:28\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:148:26\n    at Root.each (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:114:22)\n    at Root.walk (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:147:21)\n    at Root.walkRules (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/container.js:239:25)\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/postcss-modules-scope/lib/index.js:101:9\n    at LazyResult.run (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:274:20)\n    at LazyResult.asyncTick (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:189:32)\n    at LazyResult.asyncTick (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:201:22)\n    at LazyResult.asyncTick (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:201:22)\n    at LazyResult.asyncTick (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:201:22)\n    at processing.Promise.then._this2.processed (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:228:20)\n    at new Promise (<anonymous>)\n    at LazyResult.async (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:225:27)\n    at LazyResult.then (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:131:21)\n    at processCss (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/lib/processCss.js:212:5)\n    at Object.module.exports (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/lib/loader.js:40:2)\n    at runLoaders (/usr/local/lib/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /usr/local/lib/node_modules/webpack/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /usr/local/lib/node_modules/webpack/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/usr/local/lib/node_modules/webpack/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.<anonymous> (/Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/lib/loader.js:50:18)\n    at /Users/zhangxing/Desktop/个人项目/webpack/node_modules/css-loader/lib/processCss.js:236:4\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:118:7)");

/***/ })
/******/ ]);