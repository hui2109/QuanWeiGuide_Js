a=0xff;
b=0xbadcafe;
c=0b10101;
d=0o377;

console.log("-----------------------")

e=3.14;
f1=2345.6789;
g=.333333333333;
h=6.02e23;
i=1.4738223E-32;

console.log("-----------------------")

let billion=1_000_000_000;
let bytes=0x89_AB_CD_EF;
let bits=0b0001_1101_0111;
let fraction=0.123_456_789;

console.log("-----------------------")

// Math数学对象
console.log(Math.pow(2,53));
console.log(Math.round(.6));
console.log(Math.ceil(.6));
console.log(Math.floor(.6));
console.log(Math.abs(-5));
console.log(Math.max(a,b,c));
console.log(Math.min(a,b,c));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(3));
console.log(Math.pow(3,0.5));
console.log(Math.sin(0));
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));

console.log(Math.cbrt(27));
console.log(Math.hypot(3,4));
console.log(Math.log10(100));
console.log(Math.log2(1024));
console.log(Math.log1p(g));
console.log(Math.expm1(g));
console.log(Math.sign(g));
console.log(Math.imul(2,3));
console.log(Math.clz32(0xf));
console.log(Math.trunc(3.9));
console.log(Math.fround(g));
console.log(Math.sinh(g));
console.log(Math.asinh(g));

console.log("-----------------------")

Infinity;
Number.POSITIVE_INFINITY;
1/0;
Number.MAX_VALUE*2;
-Infinity;
Number.NEGATIVE_INFINITY;

console.log("-----------------------")

BigInt(Number.MAX_SAFE_INTEGER);
let string="1"+"0".repeat(100);
console.log(BigInt(string));
console.log(BigInt(1));
console.log(1n===1);

console.log("-----------------------")

let timestamp=Date.now();
let now= new Date();
let ms= now.getTime();
let iso=now.toISOString();
console.log(timestamp,now,ms,iso)


