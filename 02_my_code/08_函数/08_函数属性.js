function factorial(n) {
    if (Number.isInteger(n) && n>0) {
        if (!(n in factorial)) {
            factorial[n]=n*factorial(n-1);
        }
        return factorial[n];
    }
    else{
        return NaN;
    }
}

// 初始化变量
factorial[1]=1;
console.log(factorial(1));
console.log(factorial(6));  // 缓存了<=6 的所有值
console.log(factorial[5]);
console.log(factorial[4]);
console.log(factorial[3]);
console.log(factorial[2]);
