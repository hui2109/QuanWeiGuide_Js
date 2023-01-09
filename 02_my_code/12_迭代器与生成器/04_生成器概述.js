export function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

let primes = oneDigitPrimes();
console.log(primes);

console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);
// 生成器对象也是一个可迭代对象
console.log(primes[Symbol.iterator]() === primes);

console.log([...oneDigitPrimes()]);
let sum = 0;
for (let prime of oneDigitPrimes()) sum += prime;
console.log(sum);

// 生成器表达式
const seq = function* (from, to) {
    for (let i = from; i <= to; i++) yield i;
};
console.log([...seq(3, 5)]);

// 对象使用简写形式的生成器
let o={
    x:1,
    y:2,
    z:3,
    *g(){
        for (let key of Object.keys(this)){
            yield key;
        }
    }
};
console.log([...o.g()]);
