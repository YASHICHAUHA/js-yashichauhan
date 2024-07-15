const name ="yashi"
const repocount=50
// this outdated syntax console.log(name+repocount+"value");
// console.log(`hello my n ame is${name} and my repo count is ${repocount}`);
//one another method to declare string
const gamename=new String('hitesh-hc')
console.log(gamename[0] )
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));
//************slicing in string *//
const newstring =gamename.substring(0,4);
console.log(newstring);
const anotherstring=gamename.slice(-8,4);
console.log(anotherstring);
const newstringone="   hitesh   "
console.log(newstringone);
console.log(newstringone.trim());
const url="https://yashi.com/yashi%20chauhan"
console.log(url.replace('%20','-'))
console.log(url.includes('vikas'));
console.log(gamename.split('-'));