let username='zxh'
username=null
username=undefined
username=[1,2]

let greeting='hello '+(username?username:'there');
console.log(greeting)

console.log("-----------------------")

maxWidth=0.0
preferences={maxWidth:6.0}
let max1=maxWidth||preferences.maxWidth||500;
let max2=maxWidth??preferences.maxWidth??500;
console.log(max1)
console.log(max2)

console.log("-----------------------")

let options={timeout:0,title:'',verbose:false,n:null};
console.log(options.timeout??1000)
console.log(options.title??'Untitled')
console.log(options.verbose??true)
console.log(options.quiet??true)
console.log(options.n??'1234')