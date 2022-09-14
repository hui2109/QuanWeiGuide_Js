function f(y) {return this.x+y};
let o={x:1};
let g=f.bind(o);
console.log(g(2));
let p={x:10,g};
console.log(p);
console.log(p.g(2));

console.log(f.name);
console.log(g.name);