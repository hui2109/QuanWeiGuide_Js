class Complex {
    // #r=0;
    // #i=0;
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }

    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
            this.r * that.i + this.i * that.r)
    }

    static sum(c, d) {
        return c.plus(d);
    }

    static product(c, d) {
        return c.times(d);
    }

    get real() {
        return this.r;
    }

    get imaginary() {
        return this.i;
    }

    get magnitude() {
        return Math.hypot(this.r, this.i);
    }

    toString() {
        return `{${this.r}, ${this.i}}`;
    }

    equals(that) {
        return that instanceof Complex && this.r === that.r && this.i === that.r;
    }

    static ZERO = new Complex(0, 0);
    static ONE = new Complex(1, 1);
    static I = new Complex(0, 1);
}

let c = new Complex(2, 3);
let d = new Complex(c.i, c.r)

// 打印一个类不等于调用该类的toString方法
console.log(c);
console.log(c.constructor);

console.log(c.plus(d).toString());
console.log(c.magnitude);
console.log(Complex.product(c, d));
console.log(Complex.ZERO.toString());
