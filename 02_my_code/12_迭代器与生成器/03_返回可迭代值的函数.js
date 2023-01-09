import {Range} from './02_迭代器原理.js';

function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return {
                    value: f(v.value)
                };
            }
        }
    };
}

console.log('-----------------');
console.log([...map(new Range(1, 4), x => x * x)]);

function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            for (; ;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}

console.log('-----------------');
console.log([...filter(new Range(1, 10), x => x % 2 === 0)]);

function words(s) {
    let r = /\s+|$/g;
    r.lastIndex = s.match(/[^ ]/).index
    console.log(r.lastIndex);
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let start = r.lastIndex;
            if (start < s.length) {
                let match = r.exec(s);
                if (match) {
                    return {
                        value: s.substring(start, match.index)
                    };
                }
            }
            return {done: true};
        }
    };
}

console.log([...words('   abc   def      ghi!    ')]);
