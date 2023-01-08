// 格式化数值
let cny = Intl.NumberFormat('zh-Hans-CN', {style: 'currency', currency: 'CNY'});
console.log(cny.format('10000000'));

let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
}).format;
console.log(data.map(formatData));

// 格式化日期和时间
let d = new Date('2020-01-01T13:14:15Z');
console.log(Intl.DateTimeFormat('zh-Hans-CN').format(d));
console.log(Intl.DateTimeFormat('en-US').format(d));
// 周和月使用名字
let opts = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
console.log(Intl.DateTimeFormat('zh-Hans-CN', opts).format(d));
console.log(Intl.DateTimeFormat('zh-u-ca-chinese', opts).format(d));  // 2019己亥年腊月7星期三

// 比较字符串
const filenameOrder = new Intl.Collator(undefined, {numeric: true}).compare;
console.log(['page10', 'page9', 'page11'].sort(filenameOrder));

// 大致匹配
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: 'base',
    ignorePunctuation: true
}).compare;
let strings = ['food', 'fool', 'Føø Bar'];
console.log(strings.findIndex(s => {
    return fuzzyMatcher(s, 'foobar') === 0;
}));

// 匹配拼音
const pinyin=new Intl.Collator('zh-u-co-pinyin').compare;
let hanzi=['我','爱','你'];
console.log(hanzi.sort(pinyin));  // [ '爱', '你', '我' ] ai ni wo --> a n w
