for (let count=0;count<10;count++) {
    console.log(count);
}

console.log("-----------------------")

let i,j,sum=0;
for (i=0,j=10;i<10;i++,j--) {
    sum+=i*j;
    console.log(sum);
}

console.log("-----------------------")

let data=[1,2,3,4,5,6,7,8,9],sum1=0;
for (let element of data) {
    sum1+=element;
}
console.log(sum1)

console.log("-----------------------")

let o={x:1,y:2,z:3};
let keys='';
for (let k of Object.keys(o)) {
    keys+=k;
}
console.log(keys)

console.log("-----------------------")

let sum2=0;
for (let v of Object.values(o)) {
    sum2+=v;
}
console.log(sum2)

console.log("-----------------------");

let pairs='';
for (let [k,v] of Object.entries(o)) {
    pairs+=k+v;
}
console.log(pairs);

console.log("-----------------------");

let frequency={};
for (let letter of 'mississippi') {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter]=1;
    }
}
console.log(frequency);

console.log("-----------------------")

let text='Na na na na na na na na na Batman!';
let wordSet= new Set(text.split(' '));
let unique=[];
console.log(wordSet);
for (let word of wordSet) {
    unique.push(word);
}
console.log(unique);

console.log("-----------------------");

let m=new Map([[1,'one'],[2,'two']]);
for (let [key,value] of m) {
    console.log(key);
    console.log(value);
}