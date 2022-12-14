function memoize(f) {
    const cache = new Map();
    return function (...args) {
        let key = args.length + '_' + args.join('+');
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            // console.log(cache.keys());
            return result;
        }
    };
}

function gcd(a, b) {
    if (a < b) {
        [a, b] = [b, a];
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// console.log(gcd(85, 187));
const gcdmemo = memoize(gcd);
console.log(gcdmemo(85, 187));

const factorial=memoize(function (n){
    return (n<=1)?1:n*factorial(n-1);
});
console.log(factorial(5));