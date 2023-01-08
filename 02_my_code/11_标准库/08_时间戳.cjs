const {performance}=require('perf_hooks')

let d = new Date();
console.log(d.getTime());
d.setTime(d.getTime() + 30000);

// 静态方法
let startTime = Date.now();
let endTime = Date.now();
console.log(`took ${endTime - startTime}ms.`)

// 高精度时间
console.log(performance.now());


