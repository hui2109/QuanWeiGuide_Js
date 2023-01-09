function* oneAndDne() {
    yield 1;
    yield 2;
    yield 3;
    return 'abc';
}

let generator = oneAndDne();
// console.log([...generator]);  // [ 1, 2, 3 ] 没有 "abc"
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// yield表达式的值
function* smallNumbers() {
    console.log('next()第一次被调用;参数被舍弃');
    let y1 = yield 1;
    console.log('next()第二次被调用,参数是', y1);
    let y2 = yield 2;
    console.log('next()第三次被调用,参数是', y2);
    let y3 = yield 3;
    console.log('next()第四次被调用,参数是', y3);
    return 4;
}

console.log('--------------------')

let g = smallNumbers();
console.log('创建了生成器,代码未运行');
let n1 = g.next('a');
console.log('生成器yield', n1.value);
let n2 = g.next('b');
console.log('生成器yield', n2.value);
let n3 = g.next('c');
console.log('生成器yield', n3.value);
let n4 = g.next('d');
console.log('生成器yield', n4.value);

