'use strict'
const strict=(function () {return this;}())
console.log(strict)

console.log('-----------------');

let calculator={
    operand1:1,
    operand2:1,
    add() {
        this.result=this.operand1+this.operand2
    }
};
calculator.add();
console.log(calculator.result);

console.log('-----------------');

let o={
    m:function() {
        let self=this;
        console.log(this === o);
        f1();

        function f1() {
            console.log(this === o);
            console.log(self === o);
        }

        const f2=(function () {
            console.log(this === o);
        }).bind(this);

        f2()

        const f3=()=>{
            console.log(this === o);
        }

        f3()
    }
};
o.m();