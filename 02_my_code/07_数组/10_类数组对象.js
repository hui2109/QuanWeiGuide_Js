let a={};
let i=0;
while (i<10) {
    a[i]=i*i;
    i++;
}
a.length=i;
console.log(a);

let total=0;
for (let j=0;j<a.length;j++) {
    total+=a[j];
}
console.log(total);

console.log('-----------------');

// 测试对象是不是类数组对象
function isArrayLike(o) {
    return o &&
        typeof o === 'object' &&
        Number.isFinite(o.length) &&
        o.length >= 0 &&
        Number.isInteger(o.length) &&
        o.length < 2 * 32 - 1;
}

// 构建一个类数组对象
let b={0:'a',1:'b',2:'c',length:3}
console.log(Array.prototype.join.call(b, '+'));
console.log(Array.prototype.map.call(b, x=>x.toUpperCase()));
console.log(Array.prototype.slice.call(b, 0));  // 真正的数组副本
console.log(Array.from(b));  // 更容易的真正的数组副本
