class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && this.to >= x;
    }

    * [Symbol.iterator]() {
        for (let i = Math.ceil(this.from); i <= this.to; i++)
            yield i;
    }

    toString() {
        return '(' + this.from + '...' + this.to + ')';
    }
}

let r=new Range(1,3);
console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);