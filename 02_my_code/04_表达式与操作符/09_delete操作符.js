let o={x:1,y:2,z:3};
delete o.y
console.log('y' in o)
console.log(o)

console.log("-----------------------")

let a=[7,8,9]

delete a[1]
console.log('1' in a)

// delete a[2]
// console.log('2' in a)

console.log(a)
console.log(a.length)

console.log("-----------------------")

let c=9;
console.log(delete c);  // 删除运算符目标无效，应为字段引用
console.log(delete o);  // 删除运算符目标无效，应为字段引用