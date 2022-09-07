// 打印九九乘法表
let table=new Array(9);
for (let i=0,len=table.length;i<len;i++) {
    table[i]=new Array(9);
}
console.log(table)

console.log('-----------------');

for (let row=0,len1=table.length;row<len1;row++) {
    for (let col=0,len2=table[row].length;col<len2;col++) {
        table[row][col]=`${row+1}*${col+1}=${(row+1)*(col+1)}`;
    }
}
console.log(table);