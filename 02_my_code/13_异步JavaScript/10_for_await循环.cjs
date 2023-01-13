const fs = require('fs');

async function parseFile(filename) {
    let stream = fs.createReadStream(filename, {encoding: 'utf-8'});
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

parseFile('09_async函数.js').then();