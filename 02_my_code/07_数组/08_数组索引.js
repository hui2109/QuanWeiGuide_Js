let a=[0,1,2,1,0];
console.log(a.indexOf(1));
console.log(a.lastIndexOf(1));
console.log(a.indexOf(3));

function findall(a,x) { // a是数组，x的要找的所有值
    let results=[],
        len=a.length,
        pos=0;
    while (pos<len) {
        pos=a.indexOf(x,pos);
        if (pos===-1) break;
        results.push(pos);
        pos++;
    }
    return results;
}

console.log(findall(a, 1));

console.log('-----------------');

let b=[1,true,3,NaN];
console.log(b.includes(true));
console.log(b.includes(2));
console.log(b.includes(NaN));
console.log(b.indexOf(NaN));  //NaN和自己不相等



