// 双斜线代表注释一行

let x;

x=0;
console.log(x)

x=1;
x=0.01;
x="hello world";
x='javaScript';
x=true;
x=false;
x=null;
x=undefined;

// 下面介绍对象

let book={
    topic:"javaScript",
    edition:7
};

// 访问对象的值

console.log(book.topic);
console.log(book["edition"]);
book.author="Flanagan";
book.contents={};

console.log(book.contents?.ch01?.sect1)

// 值的数组

let primes=[2,3,5,7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length-1]);
primes[4]=9;
primes[4]=11;

let empty=[]
console.log(empty.length)

let points=[
    {
        x:0,
        y:0
    },
    {
        x:1,
        y:1
    }
];

let data ={
    trial1:[
        [1,2],
        [3,4]
    ],
    trial2:[
        [2,3],
        [4,5]
    ]
};



