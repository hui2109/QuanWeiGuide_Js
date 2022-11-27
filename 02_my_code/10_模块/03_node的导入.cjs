// 内置模块
const fs = require('fs');
const http = require('http');

// 自己的模块
// const stats=require('./01_闭包模块.js')
// const BitSet=require('../09_类/13_Sets.js')
import ('./01_闭包模块.js').then((lib1) => console.log(lib1, 'import1'))
import ('../09_类/13_Sets.js').then((BitSet) => console.log(BitSet, 'import2'))
