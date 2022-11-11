function Range2(from, to) {
    this.from = from;
    this.to = to;
}

Range2.prototype.includes = function (x) {
    return this.from <= x && this.to >= x;
};
Range2.prototype[Symbol.iterator] = function* (x) {
    for (let i = Math.ceil(this.from); i <= this.to; i++)
        yield i;
};
Range2.prototype.toString = function () {
    return '(' + this.from + '...' + this.to + ')';
};


function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

console.log(Range2.prototype);
console.log(Range2.prototype.constructor);
console.log('-----------------');

Span.prototype = Object.create(Range2.prototype);
Span.prototype.constructor = Span;
console.log(Span.prototype);
console.log(Span.prototype.constructor);
console.log('-----------------');

Span.prototype.toString = function () {
    return `(${this.from}... +${this.to - this.from})`;
};

s = new Span(12, 15);
console.log(s.from);
console.log(s.to);
console.log(s.toString());
console.log(s.includes(15));
