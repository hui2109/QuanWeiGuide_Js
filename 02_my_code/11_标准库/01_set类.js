let s = new Set([2]);
let t = new Set([1, s]);
let t1 = new Set(s);
let unique = new Set('Mississippi');
let size = unique.size;
console.log(s, t, t1, unique, size);

console.log('-----------------');

let s1 = new Set;
console.log(s1.size);
console.log(s1.add(1));
s1.add(true);
s1.add([1, 2, 3]);
console.log(s1);

console.log('-----------------');

let oneDigitPrimes = new Set([2, 3, 5, 7]);
let sum = 0;
for (let i of oneDigitPrimes) {
    sum += i
}
console.log(sum);

console.log('-----------------');

console.log(Math.max(...oneDigitPrimes));

console.log('-----------------');

let product = 1;
oneDigitPrimes.forEach(n => {
    product *= n;
})
console.log(product)

