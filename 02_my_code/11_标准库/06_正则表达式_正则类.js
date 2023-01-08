// 使用双反斜线
let zipcode = new RegExp('\\d{5}', 'g');

// 修改已有的正则
let exactMatch = /JavaScript/;
let caseInsensitive = new RegExp(exactMatch, 'i');  // 现在不区分大小写

// exec方法,每次成功执行,都会将lastIndex属性+1
let pattern = /Java/g;
let text = 'Javascript > Java';
let match;
while ((match = pattern.exec(text)) !== null) {
    console.log(`Matched ${match[0]} at ${match.index}`);
    console.log(`Next search begins at ${pattern.lastIndex}`);
}

// 错误的无限循环(每次迭代都将lastIndex设为0)
let match2, html, positions = [];
while ((match2 = /<p>/g.exec(html) !== null)) {
    positions.push(match2.index);
}

// 错误的遍历(每次成功执行都会将lastIndex属性+1)
let dictionary = ['apple', 'book', 'coffee'];
let doubleLetterWords = [];
let doubleLetter = /(\w)\1/g;
for (let word of dictionary) {
    // doubleLetter.lastIndex = 0;  // 修正方案
    if (doubleLetter.test(word)) {
        doubleLetterWords.push(word);
    }
}
console.log(doubleLetterWords);  // 没有book
