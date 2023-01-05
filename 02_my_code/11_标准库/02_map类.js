let m = new Map();
let n = new Map([
    ['one', 1],
    ['two', 2]
]);
let copy = new Map(n);
let o = {x: 1, y: 2};
let p = new Map(Object.entries(o));
console.log(m, n, copy, p);

console.log('-----------------');

let m1 = new Map();
console.log(m1.size);
m1.set('one', 1);
console.log(m1.set('two', 2));
console.log(m1.get('two'));

console.log('-----------------');

let m3 = new Map([
    ['x', 1],
    ['y', 2]
]);
for (let [key, value] of m3) {
    console.log(key, value);
}

console.log('-----------------');

m3.forEach((value, key) => {
    console.log('值为:', value, '键为:', key);
});
