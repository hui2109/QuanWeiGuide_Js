const http = require('http');

function getJSON(url) {
    return new Promise((resolve, reject) => {
        let request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP status ${response.statusCode}`));
                response.resume();
            } else if (response.headers['content-type'] !== 'application/json') {
                reject(new Error('Invalid content-type'));
                response.resume();
            } else {
                let body = '';
                response.setEncoding('utf-8');
                response.on('data', chunk => {
                    body += chunk;
                });
                response.on('end', () => {
                    try {
                        let parsed = JSON.parse(body);
                        resolve(parsed);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });
        request.on('error', error => {
            reject(error);
        });
    });
}

// 下面代码会报错--Invalid content-type
// getJSON('http://example.com').then(parsed_text => {
//     console.log(parsed_text);
// })

// 成功运行
getJSON('http://httpbin.org/ip').then(parsed_text => {
    console.log(parsed_text);
})
