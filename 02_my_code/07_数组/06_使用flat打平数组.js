let a=[1,[2,[3,[4]]]];
console.log(a.flat(3));

console.log('-----------------');

let phrases=['hello world','the definitive guide'];
let words1=phrases.map(phrase=>phrase.split(' '));
let words2=phrases.flatMap(phrase=>phrase.split(' '));
console.log(words1);
console.log(words2);

console.log('-----------------');

let b=[-2,-1,1,2]
let sr1=b.map(x=>x<0?[]:Math.sqrt(x));
let sr2=b.flatMap(x=>x<0?[]:Math.sqrt(x));
console.log(sr1);
console.log(sr2);
