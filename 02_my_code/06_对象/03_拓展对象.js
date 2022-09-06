let target={x:1},source={y:2,z:3};

for (key of Object.keys(source)) {
    target[key]=source[key];
}

console.log(target);

console.log('-----------------');

let defaults={a:5,b:2,x:9};
Object.assign(target,defaults);
console.log(target);

console.log('-----------------');

o={x:1,y:63};
// o=Object.assign({},defaults,o);
o={...defaults,...o};
console.log(o);

console.log('-----------------');

function merge(target,...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (!(key in target)) {
                target[key]=source[key];
            }
        }
    }
    return target;
}

console.log(Object.assign({x:1},{x:2,y:2},{y:3,z:4}));
console.log(merge({x:1},{x:2,y:2},{y:3,z:4}));

console.log('-----------------');

// 以下代码用于从一个对象中删除另一个模板对象没有的属性
function restrict(target,...templates) {
    for (let template of templates) {
        for (key of Object.keys(target)) {
            if (!(key in template)) {
                delete target[key];
            }
        }
    }
    return target;
}
console.log(restrict({x:1,y:5,z:23,a:'45',b:4,c:54},{x:2,y:2,z:8}));

console.log('-----------------');

// 以下代码用于从一个对象中删除另一个对象包含的所有属性

function subtract(target,...sources) {
    for (let source of sources) {
        for (key of Object.keys(target)) {
            if (key in source) {
                delete target[key];
            }
        }
    }
    return target;
}
console.log(subtract({x:1,y:5,z:23,a:'45',b:4,c:54},{x:2,y:2,z:8}));