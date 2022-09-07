let a=[1,2,3];
let b=[0,...a,4];
console.log(b)

console.log('-----------------');

let digits=[...'0123456789ABCDEFGHIJKLMN']
console.log(digits)

console.log('-----------------');

// 实用去重小技巧
let letters=[...'hello world'];
console.log([...new Set(letters)]);