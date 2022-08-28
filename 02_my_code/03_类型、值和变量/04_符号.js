let stream = 'string name';
let rename = Symbol('prop_name');
a = typeof stream;
b = typeof rename;
console.log(a, b)

console.log("-----------------------")

let o={}
o[stream]=1;
o[rename]=2;
console.log(o[stream],o[rename])

console.log("-----------------------")

c=Symbol('qwer')
d=Symbol('qwer')
console.log(c.toString())
console.log(d.toString())
console.log(Symbol.keyFor(c))
console.log(Symbol.keyFor(d))
console.log(c===d)
console.log(c.toString()===d.toString())

console.log("-----------------------")

e=Symbol.for('qwert')
f1=Symbol.for('qwert')
console.log(e.toString())
console.log(f1.toString())
console.log(Symbol.keyFor(e))
console.log(Symbol.keyFor(f1))
console.log(e===f1)
console.log(e.toString()===f1.toString())

console.log("-----------------------")

let g=[1,2,3];
g[0]=7
g[8]=8
console.log(g)