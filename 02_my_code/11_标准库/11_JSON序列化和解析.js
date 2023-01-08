let o = {
    s: '',
    n: 0,
    a: [true, false, null]
};
let s = JSON.stringify(o);  // JSON的序列化
let copy = JSON.parse(s);  // JSON的反序列化
console.log(s);
console.log(copy);

// 第三个参数,表示每行缩进的空格数
let o1 = {
    s: 'test',
    n: 0
}
console.log(JSON.stringify(o1, null, 2));

// 复活函数
let text = '{"_s":"abc","n":"2023-04-21T08:58:31.536Z","a":[true,false,null]}'
let data = JSON.parse(text, function (key, value) {
    if (key[0] === '_') return undefined;
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) {
        return new Date(value);
    }
    // 否则返回原始值
    return value;
});
console.log(data);
console.log(typeof data.n);  // object

// 替代数组
let address = {
    country: 'China',
    state: 'Sichuan',
    city: 'chengdu',
    province: 'Sichuan_P'
}
let text1 = JSON.stringify(address, ['city', 'state', 'country']);
console.log(text1);  // 里面没有province属性,且指定了序列化的顺序

// 替代函数
let json = JSON.stringify(data,
    (k, v) => {
        if (typeof v === 'string') {
            console.log(v instanceof String);  // 非对象实例，因此返回 false
            return undefined;
            }
            return v;
        });
console.log(json);
