function abs(x){
    if (x>=0){
        return x;
    }
    else {
        return -x;
    }
}
console.log(abs(-10) === abs(10));

console.log("----------------");

function sum(array){
    let sum=0;
    for (let x of array){
        sum+=x;
    }
    return sum;
}
let primes=[2,3,5,7,11];
console.log(sum(primes))

console.log("----------------");

function factorial(n){
    let product=1;
    while (n>1){
        product*=n;
        n--;
    }
    return product;
}
console.log(factorial(4))

console.log("----------------");

function factorial2(n){
    let i,product=1;
    for (i=2;i<=n;i++)
        product*=i;
    return product;
}
console.log(factorial2(4))