class Buffer {
    // 公有动态字段
    size = 18;
    // 公有静态字段
    static capacity = 4096;

    // 私有动态字段
    #buffer = 123;
    get buffer1() {return this.#buffer;}
    // 私有静态字段
    static #pattern = 'abc'
    get pattern1() {return this.#pattern}
    get pattern2() {return Buffer.#pattern}
}

let b=new Buffer()
console.log(b.size)  // 18
console.log(b.capacity)  // undefined
console.log(Buffer.capacity)  // 4096

console.log(b.buffer)  // undefined,私有动态字段，只能在类体内访问
console.log(b.buffer1)  // 123

console.log(b.pattern)  // undefined,私有静态字段，只能在类体内访问，且是构造函数的属性
// console.log(b.pattern1)  // 报错，因为是静态字段，只是构造函数的属性，不是实例属性
console.log(Buffer.pattern)  // undefined，因为是私有字段，只能在类体内访问
console.log(b.pattern2)  // abc

