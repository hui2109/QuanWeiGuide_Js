let counter=0;
const increment =()=>void counter++;
console.log(increment())
console.log(counter)

console.log("-----------------------")

let i,j,k;
console.log((i=0, j=1, k=2))

console.log("-----------------------")

for (let i=0,j=10;i<j;i++,j--){
    console.log('i:',i,'-----','j:',j);
}
