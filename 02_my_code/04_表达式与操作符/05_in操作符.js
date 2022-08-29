let point={x:1,y:1};
console.log('x' in point);
// console.log(x in point);    ReferenceError: x is not defined
console.log('z' in point);
console.log('1' in point);
console.log('toString' in point);
console.log(point.toString());

let data=[7,8,9];
console.log('0' in data);
console.log(7 in data);
console.log('7' in data);
console.log(1 in data);  // 自动转换为字符串'1'
console.log(3 in data);  // 自动转换为字符串'3'

