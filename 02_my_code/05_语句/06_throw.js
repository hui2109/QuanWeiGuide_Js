'use strict'     // 启动严格模式
function factorial(x) {
    if (x<0) throw new Error('x must not be negative');
    let f;
    for (f=1;x>1;f*=x,x--);
    return f;
}
let a=new Error('x must not be negative')
console.log(factorial(5));
// console.log(factorial(-5));
console.log(a.name)
console.log(a.message)

console.log("-----------------------");

// 以下代码请在 02_my_code/05_语句/07_my_alert.html 中运行
// try {
//     let n=Number(prompt('Please enter a positive integer',''));
//     let f=factorial(n);
//     alert(n+' != '+f);
// }
// catch (ex) {
//     alert(ex);
// }