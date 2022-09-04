function convert(x) {
    switch (typeof x) {
        case "number":
            return x.toString(16);
        case "string":
            return '"'+x+'"';
        default:
            return String(x);
    }
}
let x='abc'
console.log(convert(x));