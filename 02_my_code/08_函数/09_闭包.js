let scope='global scope';
function check_scope() {
    let scope='local scope';
    function f(){return scope;}
    return f;
}
let s=check_scope()()
console.log(s);

console.log('-----------------');

let uniqueInteger=(function (){
    let counter=0;
    return function (){
        return counter++;
    };
}());
console.log(uniqueInteger());

console.log('-----------------');

function counter() {
    let n=0;
    return {
        count:function (){ return n++ },
        reset:function (){ n=0; }
    };
}
let c=counter(),d=counter();
console.log(c.count());
console.log(d.count());
c.reset()
console.log(c.count());
console.log(d.count());

console.log('-----------------');

function counter1(n) {
    return {
        get count() {return n++;},
        set count(m) {
            if (m>n) n=m;
            else throw new Error('count can only be set to a larger value.')
        }
    };
}
let c1=counter1(1000);
console.log(c1.count);
console.log(c1.count);
c1.count=2000;
console.log(c1.count);
// c1.count=2000;   这行会报错
