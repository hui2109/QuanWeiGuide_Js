// 在当前日期上,增加3个月14天
let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
console.log(d);

// 格式化日期
let d1 = new Date(2020, 0, 1, 17, 10, 30);
console.log(d1.toString());
console.log(d.toUTCString());
console.log(d.toISOString());
console.log(d1.toLocaleString());
console.log(d1.toLocaleDateString());
console.log(d.toJSON());
