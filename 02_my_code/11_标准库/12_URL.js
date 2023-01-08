let url = new URL('https://example.com:8080/path/name?q=term&e=abc#fragment');
console.log(url.href);
console.log(url.origin);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);

// 设置属性
let url1 = new URL('https://example.com');
url1.pathname = 'api/search';
url1.search = 'q=test';
console.log(url1.toString());

// URLSearchParams对象
let url2 = new URL('https://example.com');
let params = new URLSearchParams();
params.append('q', 'term');
params.append('opts', 'exact');
console.log(params.toString());
url2.search = params;
console.log(url2.href);


