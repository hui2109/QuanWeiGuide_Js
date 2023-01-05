let s = "15 times 15 is 225";
let k=s.replace(/\d+/gu, n => parseInt(n).toString(16));
console.log(k);
