// slice()方法
let a=[1,2,3,4,5];
console.log(a.slice(-3,-2))
console.log(a)

console.log('-----------------');

// splice()方法
let b=[1,2,3,4,5,6,7,8];
console.log(b.splice(2, 3, [1, 2], 3));
console.log(b);

console.log('-----------------');

// fill()方法
let c=new Array(5);
console.log(a.fill(0));
console.log(a.fill(9,1));
console.log(a.fill(8,2,-1));

console.log('-----------------');

// copyWithin()方法
let d=[1,2,3,4,5];
e=d.copyWithin(1,0,5);
console.log(e)
f=d.copyWithin(1,0,5);
console.log(f,e)         // 注意：e此时被修改了，因为copyWithin()方法返回数组本身
console.log(e,f,e===f)