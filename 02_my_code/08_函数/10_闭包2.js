function addPrivateProperty(o,name,predicate) {
    let value;
    o[`get${name}`]=function (){
        return value;
    }
    o[`set${name}`]=function (v){
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        }
        else {
            value=v;
        }
    }
}

let o={};
addPrivateProperty(o,'Name',x=>typeof x==='string')
o.setName('Frank')
console.log(o.getName());
// o.setName(0)   这行会报错，因为类型不是string

console.log('-----------------');

function const_funcs() {
    let funcs=[];
    for (let i=0; i<10; i++) {
        funcs[i]=()=>i;
    }
    return funcs;
}

let funcs=const_funcs()
for (element of funcs) {
    console.log(element());
}
