let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}

// 迭代部分使用的迭代器
let lst = [1, 2, 3, 4, 5];
let iter = lst[Symbol.iterator]();
let head = iter.next().value;
console.log(head);
console.log([...iter]);

console.log('-----------------');

// 创建可迭代对象、迭代器对象、迭代结果对象
export class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === 'number' && this.from <= x && x <= this.to;
    }

    toString() {
        return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next() {
                return (next <= last)
                    ? {value: next++}
                    : {done: true};
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

for (let x of new Range(1, 10)) {
    console.log(x);
}
console.log([...new Range(-2, 2)]);

// 试着迭代迭代器对象
let range = new Range(1, 3);
let ite = range[Symbol.iterator]();
let first = ite.next().value;
let end = [...ite];
console.log(first, end);
