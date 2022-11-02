function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && this.to >= x;
    },
    * [Symbol.iterator]() {
        for (let i = Math.ceil(this.from); i <= this.to; i++)
            yield i;
    },
    toString() {
        return '(' + this.from + '...' + this.to + ')';
    }
};

let r1=range(1.1,3.1);
console.log(r1.includes(2));
console.log(r1.toString());
console.log([...r1]);
console.log(range.methods);
