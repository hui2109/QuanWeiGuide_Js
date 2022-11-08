class Range_to {
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

    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`);
        }
        return new Range_to(parseInt(matches[1]), parseInt(matches[2]));
    }
}

let r = Range_to.parse('(1...10)');
// r.parse('(2...11)')