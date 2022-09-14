function sum(a) {
    let total=0;
    for (let element of a){
        if (typeof element!=='number') {
            throw new TypeError(`sum(): element (${element}) is not a number.`)
        }
        total+=element;
    }
    return total;
}

console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, '3']));  这行代码会出错