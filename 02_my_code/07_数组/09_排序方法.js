let a=['banana','cherry','apple'];
console.log(a.sort());

console.log('-----------------');

let b=[334,46,1111,222];
console.log(b.sort());   // 按字母排序
console.log(b.sort(function (a, b) {
    return a - b;
}));    // 从小到大排序
console.log(b.sort((a, b) => b - a)); // 从大到小排序

console.log('-----------------');

let c=['ant','Bug','cat','Dog'];
console.log(c.sort());   // 区分大小写的排序
console.log(c.sort(function (s, t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
}));  // 不区分大小写的倒置排序

console.log('-----------------');

let d=[1,2,3];
d.reverse();
console.log(d);
