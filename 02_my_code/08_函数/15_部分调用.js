function partialLeft(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs, ...innerArgs];
        return f.apply(this, args);
    };
}

function partialRight(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...innerArgs, ...outerArgs];
        return f.apply(this, args);
    };
}

function partial(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs];
        let innerIndex = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined)
                args[i] = innerArgs[innerIndex++];
        }
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}

const f = function (x, y, z) {
    return x * (y - z);
};
console.log(partialLeft(f, 2)(3, 4));
console.log(partialRight(f, 2)(3, 4));
console.log(partial(f, undefined, 2)(3, 4));

const sum=(x,y)=>x+y;
const increment=partialLeft(sum,1);
const cuberoot=partialRight(Math.pow, 1/3);
console.log(cuberoot(increment(26)));
