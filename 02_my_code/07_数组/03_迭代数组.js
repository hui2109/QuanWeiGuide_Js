let letters=[...'Hello world'];
let string='';
for (let letter of letters) {
    string+=letter;
}
console.log(string)

console.log('-----------------');

let every_other=[];
for (let [index,letter] of letters.entries()) {
    every_other.push([index,letter]);
}
console.log(every_other)

console.log('-----------------');

let uppercase='';
letters.forEach(
    letter => {
        uppercase+=letter.toUpperCase();
    }
)
console.log(uppercase)

console.log('-----------------');

let vowels='';
for (let i=0,len=letters.length;i<len;i++) {
    let letter=letters[i];
    if (/[aeiou]/.test(letter)) {
        vowels+=letter;
    }
}
console.log(vowels)

