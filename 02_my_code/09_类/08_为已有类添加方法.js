Number.prototype.times = function (f, content) {
    console.log(content)
    let n = this.valueOf();
    for (let i = 0; i < n; i++) {
        f.call(content, i);
    }
}

let n = 3
n.times(i => {
    console.log(`hello ${i}`);
});