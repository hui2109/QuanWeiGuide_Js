// 网络事件中的回调
function getCurrentVersionNumber(versionCallback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.example.com/api/version');
    request.send();

    request.onload = function () {
        if (request.status === 200) {
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            versionCallback(request.statusText, null);
        }
    };
    request.onerror = request.ontimeout = function (e) {
        versionCallback(e.type, null);
    };
}

// Node中的回调
const fs = require('fs');
let options = {};
fs.readFile('../../package.json', 'utf-8', (err, text) => {
    if (err) {
        console.warn('Could not read config file:', err);
    } else {
        Object.assign(options, JSON.parse(text));
    }
})
setTimeout(() => {
    console.log(options);  // 必须等一会儿才能调用这个函数,因为 fs.readFile 是异步的
}, 1000);

// Node中处理HTTP请求
const https = require('https');

function getText(url, callback) {
    let request = https.get(url);
    request.on('response', response => {
        let httpStatus = response.statusCode;
        response.setEncoding('utf-8');
        let body = '';

        response.on('data', chunk => {
            body += chunk;
        });

        response.on('end', () => {
            if (httpStatus === 200) {
                callback(null, body);
            } else {
                callback(httpStatus, null);
            }
        });
    });
    request.on('error', err => {
        callback(err, null);
    })
}

