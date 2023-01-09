import {oneDigitPrimes} from './04_生成器概述.js';

function* fibonacciSequence() {
    let x = 0;
    let y = 1;
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

// 返回第几个fibonacci数
function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 1) return f;
    }
}

console.log(fibonacci(7));

// take生成器
function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while (n-- > 0) {
        let next = it.next();
        if (next.done) return;
        else yield next.value;
    }
}

console.log([...take(5, fibonacciSequence())]);

// 交替yield
function* zip(...iterables) {
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while (iterators.length > 0) {
        if (index >= iterators.length) {
            index = 0;
        }
        let item = iterators[index].next();
        if (item.done) iterators.splice(index, 1);
        else {
            yield item.value;
            index++;
        }
    }
}

// 交替迭代3个可迭代对象
console.log([...zip(oneDigitPrimes(), 'ab', [1, 2, 3])]);