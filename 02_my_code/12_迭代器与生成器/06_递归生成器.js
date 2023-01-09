import {oneDigitPrimes} from "./04_生成器概述.js";

function* sequence(...iterables) {
    for (let iterable of iterables) {
        for (let item of iterable) {
            yield item;
        }
    }
}

console.log('---------------------')
console.log([...sequence('abc', oneDigitPrimes())]);

function* betterSequence(...iterables) {
    for (let iterable of iterables) {
        yield* iterable;
    }
}

console.log('*---------------------*')
console.log([...betterSequence('abc', oneDigitPrimes())]);

