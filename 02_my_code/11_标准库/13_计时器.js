setTimeout(() => {
    console.log('Ready...');
}, 1000);
setTimeout(() => {
    console.log('set...');
}, 2000);
setTimeout(() => {
    console.log('go!');
}, 3000);

// 简单的数字⏰
let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleString());
}, 1000);
// 10秒后,停止上面的代码
setTimeout(() => {
    clearInterval(clock);
}, 10000);
