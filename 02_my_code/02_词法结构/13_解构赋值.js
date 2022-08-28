function toPolar(x,y){
    return [Math.sqrt(x*x+y*y),Math.atan2(y,x)];
}

function toCartesian(r,theta){
    return [r*Math.cos(theta),r*Math.sin(theta)];
}

let o={x:1,y:2};
for (const [name,value] of Object.entries(o)){
    console.log(name,value);
}

let [x,...y]=[1,2,3,4];
console.log(x,y);

let transparent={r:0.0,g:0.0,b:5.0,a:1.0};
let {h,j,i}=transparent;
let {r,g,b}=transparent;
console.log(h,j,i);
console.log(r,g,b);