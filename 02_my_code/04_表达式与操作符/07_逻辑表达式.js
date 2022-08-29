let o={x:1};
let p=null;
console.log(o && o.x)
console.log(p && p.x)

console.log("-----------------------")

if (p||{}){
    console.log('yes')
}

console.log("-----------------------");

console.log(!!{})
console.log(!![])

console.log("-----------------------");

data=[6,7,8];
i=0;
console.log(data[i++] *= 2)
console.log(i)
console.log(data);

i=0;
console.log(data[i++] = data[i++] *2)
console.log(i)
console.log(data);
