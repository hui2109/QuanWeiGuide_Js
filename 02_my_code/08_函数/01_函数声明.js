// 声明一个阶乘函数
console.log(factorial(5));
function factorial(x) {
    if (x===1)
        return x;
    return x*factorial(x-1);
}
