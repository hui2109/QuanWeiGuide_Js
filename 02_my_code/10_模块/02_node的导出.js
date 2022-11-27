const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = function (data) {
    return data.reduce(sum) / data.length;
}
exports.stddev = function (data) {
    let m = exports.mean(data);
    return Math.sqrt(
        data.map(x => x - m).map(square).reduce(sum) / (data.length - 1));
}

// module.exports = {mean, stddev}

console.log(exports);