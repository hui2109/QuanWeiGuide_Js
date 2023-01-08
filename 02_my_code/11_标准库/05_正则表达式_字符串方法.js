// search方法
console.log('JavaScript'.search(/script/ui));
console.log('Python'.search(/script/ui));

// replace方法
let t0 = 'JAVASCRIPT is JAVASCrIPT.'
let t1 = t0.replace(/javascript/gi, 'JavaScript');
let t2 = t0.replace(/javascript/i, 'JavaScript');  // 默认只替换第一个
console.log('t1', t1, 't2', t2);

// replace也可以接收一个函数
let s = "15 times 15 is 225";
let s1 = s.replace(/\d+/gu, n => parseInt(n).toString(16));
console.log(s1);

// replace引用语法--$
let quote = /"([^"]*)"/g;
let q1 = 'He said "stop".'.replace(quote, '《$1》');
console.log(q1);

// match方法
console.log('7 plus 8 equals 15'.match(/\d+/));  // 默认只查找第一个
console.log('7 plus 8 equals 15'.match(/\d+/g));

// 解析URL的例子
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = 'Visit my blog at https://www.example.com/~david';
let match = text.match(url);
let fullurl, protocol, host, path;
if (match !== null) {
    fullurl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
    console.log(fullurl, protocol, host, path);
    console.log(match);
    console.log(match.length);
}

// 解析URL的例子-数组的属性
let url2 = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
let text2 = 'Visit my blog at https://www.example.com/~david';
let match2 = text2.match(url2);
if (match2 !== null) {
    console.log('---------------------------');
    console.log(match2[0]);
    console.log(match2.input);
    console.log(match2.index);
    console.log(match2.groups.protocol);
    console.log(match2.groups.host);
    console.log(match2.groups.path);
}

// match中的y旗标的用法
let vowel = /[aeiou]/y;
console.log('test'.match(vowel));
vowel.lastIndex = 1;
console.log('test'.match(vowel)[0]);
console.log(vowel.lastIndex);  // lastIndex会自动更新
console.log('test'.match(vowel));
console.log(vowel.lastIndex);  // 失败后，lastIndex会自动重置

// matchAll方法
const words = /\b\p{Alphabetic}+\b/gu;
const text3 = 'This is a naïve test of the matchAll() method.'
for (let word of text3.matchAll(words)) {
    console.log(`Found '${word[0]}' at index ${word.index}.`);
}

// split方法
console.log('123，456，789'.split(','));
console.log('1, 2,  3,  \n 4,  5'.split(/\s*,\s*/));
const htmlTag=/<([^>]+)>/;
console.log('Testing<br/>1,2,3'.split(htmlTag));

