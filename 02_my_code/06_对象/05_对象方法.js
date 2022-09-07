// toString()方法
let point={
    x:1,
    y:2,
    toString:function (){
        return `(${this.x},${this.y})`;
    }
};
console.log(point.toString());
console.log(String(point));

console.log('-----------------');

// toLocaleString()方法
let point2={
    x:1000,
    y:2000,
    toString:function () {return `${this.x},${this.y}`;},
    toLocaleString:function () {
        return `(${this.x.toLocaleString()},${this.y.toLocaleString()})`;
    }
};
console.log(point2.toString());
console.log(point2.toLocaleString());

console.log('-----------------');

// valueOf()方法
let point3={
    x:3,
    y:4,
    valueOf:function () {return Math.hypot(this.x,this.y);}
};
console.log(Number(point3));
console.log(point3 > 4);
console.log(point3 > 5);
console.log(point3 < 6);

console.log('-----------------');

// toJSON()方法
let point4={
    x:1,
    y:2,
    toString:function () { return `${this.x},${this.y}`; },
    toJSON:function () { return this.toString(); }
};
console.log(JSON.stringify([point4]));