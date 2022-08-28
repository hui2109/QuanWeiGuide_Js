let a=[1,2,3]
let b=Array.from(a)
console.log(a,b)
console.log(a===b)

console.log("-----------------------")

let c=[];
for (let i=0;i<a.length;i++){
    c[i]=a[i];
}
console.log(c)
console.log(c===a)
console.log(c===b)
