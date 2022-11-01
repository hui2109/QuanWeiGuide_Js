function not(f) {
    return function (...args) {
        console.log(args);
        let result = f.apply(this, args);
        return !result;
    };
}

const even = x => x % 2 === 0;
const odd = not(even)
console.log([1, 1, 4, 5, 5].every(odd));

function compose(f, g) {
    return function (...args) {
        return f.call(this, g.apply(this, args));
    };
}

const sum = (x, y) => x + y;
const square = x => x * x;
console.log(compose(square, sum)(2, 3));
