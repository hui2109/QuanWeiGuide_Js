a=[1,2,3]
console.log(a.toString())
console.log(a.valueOf())

b=function (x){f(x)};
console.log(b.toString())
console.log(b.valueOf())

c=/\d+/g
console.log(c.toString())
console.log(c.valueOf())

let d= new Date(2020,0,1)
console.log(d.toString())
console.log(d.valueOf())

let x=0;
// let x=0;

console.log("-----------------------")

for (let i=0;i<5;i++){
    for (let i=0 ;i<4;i++){
        console.log('里面')
    }
    console.log('外面')
}