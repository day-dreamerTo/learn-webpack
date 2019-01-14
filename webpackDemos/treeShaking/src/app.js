import base from './css/base.css'

import { a } from './common/util'
console.log(a())

import { chunk } from 'lodash'
console.log(chunk([1, 2, 3], 4))

var app = document.getElementById('app')
var div = document.createElement('div')
div.className = 'littleBox'
app.appendChild(div)