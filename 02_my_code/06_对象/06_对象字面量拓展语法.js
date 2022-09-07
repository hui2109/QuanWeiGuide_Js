// 简写属性
let x=1,y=2;
let o={x,y};
console.log(o);

console.log('-----------------');

// 计算的属性名
let x1='12';
const PROPERTY_NAME='p1';
function computePropertyName() {
    return 'p'+2;
}
let p={
    x1:1,
    PROPERTY_NAME:2,
    [x1]:3,
    [computePropertyName()]:4
};
console.log(p);

console.log('-----------------');

// 符号作为属性名
const extension=Symbol('my extension symbol');
let q={
    [extension]:{ /* 这个对象中存储扩展数据 */ }
};
q[extension].x=0;
console.log(q);

console.log('-----------------');

// 扩展操作符
let position={x:0,y:0};
let dimensions={width:100,height:75};
let rect={...position,...dimensions};
console.log(rect.x + rect.y + rect.width + rect.height);
console.log(rect);

let o1={x:1};
let p1={x:0,...o1};
console.log(p1.x);

let q1={...o1,x:2};
console.log(q1.x);

let o2=Object.create({x:1});
let p2={...o2};
console.log(p2.x);

console.log('-----------------');

// 简写方法
const METHOD_NAME='m';
const symbol=Symbol();
let weirdMethods={
    'method With spaces'(x) {return x+1;},
    [METHOD_NAME](x) {return x+2;},
    [symbol](x) {return x+3;}
};
console.log(weirdMethods['method With spaces'](1));
console.log(weirdMethods[METHOD_NAME](1));
console.log(weirdMethods[symbol](1));

console.log(weirdMethods['m'](1));
console.log(weirdMethods[Symbol()]=9);
console.log(weirdMethods.m(1));

console.log(weirdMethods);

console.log('-----------------');

// 访问器属性
let p3={
    x:1.0,
    y:1.0,

    get r() { return Math.hypot(this.x,this.y); },
    set r(new_value) {
        let old_value=Math.hypot(this.x,this.y);
        let ratio=new_value/old_value;
        this.x*=ratio;
        this.y*=ratio;
    },

    get theta() {return Math.atan2(this.y,this.x);}
};
console.log(p3.r);
console.log(p3.theta);

let q2=Object.create(p3);
q2.x=3;q2.y=4;
console.log(q2.r);
console.log(q2.theta);

console.log('-----------------');

// 使用访问器属性进行合理性检查
const serial_num={
    _n:0,
    get next() {return this._n++},
    set next(n) {
        if (n>this._n)
            this._n=n;
        else
            throw new Error('serial number can only be set to a larger value');
    }
};
serial_num.next=10;
console.log(serial_num.next);
console.log(serial_num.next);

console.log('-----------------');

// 使用访问器属性每次返回不同的值
const random={
    get octet() {return Math.floor(Math.random()*256)},
    get uint16() {return Math.floor(Math.random()*65536)},
    get int16() {return Math.floor(Math.random()*65536)-32768}
};
console.log(random.octet);
console.log(random.uint16);
console.log(random.int16);
