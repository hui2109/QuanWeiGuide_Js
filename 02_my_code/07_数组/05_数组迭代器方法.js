// forEach()方法
let data=[1,2,3,4,5,6,7,8,9,10],sum=0;
data.forEach(value => {sum += value});
console.log(sum);

data.forEach(function (v, i, a) {
    a[i]=v+1;
});
console.log(data);

console.log('-----------------');

// map方法
let a=[1,2,3];
b=a.map(x=>x*x)
console.log(b);

console.log('-----------------');

// filter方法
let c=[5,4,3,2,1];
console.log(c.filter(x => x < 3));
console.log(c.filter((x, i) => i % 2 === 0));

console.log('-----------------');

// find()与findIndex()方法
let d=[1,2,3,4,5];
console.log(d.findIndex(x => x === 3));
console.log(d.findIndex(x => x < 0));
console.log(d.find(x => x % 5 === 0));
console.log(d.find(x => x % 7 === 0));

console.log('-----------------');

// every()方法与some()方法
let e=[1,2,3,4,5];
console.log(e.every(x => x < 10));
console.log(e.every(x => x % 2 === 0));
console.log(e.some(x => x % 2 === 0));
console.log(e.some(isNaN));

console.log('-----------------');

// reduce()方法与reduceRight()方法
let f=[1,2,3,4,5];
console.log(f.reduce((x, y) => x + y, 0));
console.log(f.reduce((x, y) => x * y, 1));
console.log(f.reduce((x, y) => (x > y) ? x : y));

let g=[2,3,4];
console.log(g.reduceRight((acc, val) => Math.pow(val, acc)));
