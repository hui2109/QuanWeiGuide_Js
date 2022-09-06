let o={x:1};
console.log('x' in o);
console.log('y' in o);
console.log('toString' in o);

console.log('-----------------');

console.log(o.hasOwnProperty('x'));
console.log(o.hasOwnProperty('y'));
console.log(o.hasOwnProperty('toString'));

console.log('-----------------');

console.log(o.propertyIsEnumerable('x'));
console.log(o.propertyIsEnumerable('toString'));
console.log(Object.prototype.propertyIsEnumerable('toString'));
