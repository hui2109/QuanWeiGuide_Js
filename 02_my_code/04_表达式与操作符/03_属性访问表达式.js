let o={x:4,y:{z:3},7:9,"6":8};
let a=[o,4,[5,6]];

console.log(o.x);
console.log(o.y.z);
console.log(o["x"]);
console.log(o["y"].z);
console.log(o["y"]["z"]);
// console.log(o.7);      报错，属性名为数字必须使用方括号语法
console.log(o["7"]);
// console.log(o."6");    报错，属性名为字符串必须使用方括号语法
console.log(o["6"]);

console.log("-----------------------")

console.log(a[1])
console.log(a[2][1])
// console.log(a."0")

console.log("-----------------------")

let c={b:null}
// console.log(o?.c.t);

let t;
let index=0;
console.log(t?.[index++]);
console.log(index)

console.log("-----------------------")

let f1=null,x=0;
try {
    f(x++);
}
catch (e) {
    console.log(x);
    // console.log(e);
}
f1?.(x++)
console.log(x);