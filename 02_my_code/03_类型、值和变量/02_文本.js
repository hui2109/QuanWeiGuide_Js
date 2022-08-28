let euro="∂";
let love="💗";
console.log(euro.length)
console.log(love.length)

console.log("-----------------------")

a="";
b='testing';
c="3.14";
d='name="myForm"'
e=`"She said 'hi'", he said.`
f1=`the newline character at the end of this line 
is included literally in this string`
f2=`the newline character at the end of this line \
is included literally in this string`
f3='the newline character at the end of this line ' +
    '1234'
console.log(f1)
console.log(f2)
console.log(f3)

console.log("-----------------------")

let msg="hello, "+"world";
msg.length;

let s="Hello, world!";
console.log(s.substring(1, 4));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.split(", "));

console.log(s.indexOf("l"));
console.log(s.indexOf("l",4));
console.log(s.indexOf("zz"));
console.log(s.lastIndexOf("l"));

console.log(s.startsWith("Hell"));
console.log(s.endsWith("!"));
console.log(s.includes("or"));

console.log(s.replace("llo",'ya'));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.normalize());
console.log(s.normalize("NFD"));

let s1='💗'
console.log(s1.charAt(0));
console.log(s1.charAt(s.length-1));
console.log(s1.charCodeAt(0));
console.log(s1.charCodeAt(1));
console.log(s1.codePointAt(0));
console.log(s1.codePointAt(1));

console.log('x'.padStart(3));
console.log('x'.padEnd(3));
console.log('x'.padStart(3,'*'));
console.log('x'.padEnd(3,'-'));

console.log('  test   '.trim());
console.log('  test   '.trimStart());
console.log('  test   '.trimEnd());

console.log('  test   '.concat('!'));
console.log('<>'.repeat(5));

console.log(s[0]);
console.log(s[s.length-1]);

console.log("-----------------------")

let name='Bill';
let greeting=`Hello ${name}.`;
console.log(greeting);
console.log(greeting==='Hello Bill.');

// let errorMessage=`\
// \u2718 Test failure as ${filename}:${linenumber}:
// ${exception.message}
// Stack trace:
// ${exception.stack}
// `;
// console.log(errorMessage);

console.log("-----------------------")

let text='testing: 1, 2, 3.';
let pattern=/\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern))
console.log(text.match(pattern))
console.log(text.replace(pattern,'#'))
console.log(text.split(/\D+/))

