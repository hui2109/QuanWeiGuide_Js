function fetchSequentially(urls) {
    const bodies = [];

    function fetchOne(url) {
        return fetch(url)
            .then(response => response.text())
            .then(body => {
                bodies.push(body);  // 故意返回undefined
            });
    }

    let p = Promise.resolve(undefined);
    for (let url of urls) {
        p = p.then(() => fetchOne(url));
    }

    return p.then(() => bodies);
}


let urls = ['https://www.baidu.com', 'https://www.bilibili.com']
fetchSequentially(urls)
    .then(bodies => {
        console.log(bodies);
    })
    .catch(e => console.error(e));



