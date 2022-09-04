let username;
if (!username)
    username='John Doe';
console.log(username);

let n=0;
if (n===1)
    console.log('You have 1 new message.');
else
    console.log(`You have ${n} new messages.`);

let i=j=1;
let k=2;
if (i===j){
    if (j===k){
        console.log('i equals k');
    }
    else{
        console.log("i doesn't equal k");
    }
}
else {
    console.log("i doesn't equal j");
}