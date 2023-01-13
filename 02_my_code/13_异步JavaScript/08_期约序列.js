function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];

    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            return outputs;
        } else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput)
                .then(output => outputs.concat(output))
                .then(handleNextInput);  // 伪递归魔术🪄
        }
    }

    return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) {
    return fetch(url).then(r => r.text());
}

let urls = ['https://www.baidu.com', 'https://www.bilibili.com']
promiseSequence(urls, fetchBody)
    .then(bodies => {
        console.log(bodies);
    })
    .catch(e => console.error(e));


