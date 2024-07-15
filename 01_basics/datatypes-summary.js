//primtive are 7 types. types all are call by value means to say that 
//7 types: string, number, null, undefined,Symbol,BigInt
//2nd types of data si reference data types
const score=100
const outsidetemperature=null
//javascript is a dynamically typed language because data type will automatically assigned at the time of compilation of code execution
//reference data types(non-primitive data types)
// array, obeject,functions
const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bignumber=3456677970790n//it becomes bigint number after adding n 
const heros=["shaktiman","nagraj","doga"];//arrays
//object will always be in curly bresis and we can also declare it in by giving any variable 
//and data types can be anything
let myobj={
    name:"hitesh",
    age:22,
}
//function there are diffret types to declare function 
const myfunction=function(){
    console.log("hello world");
}
//how  to detect the data types of any value
console.log(typeof outsidetemperature)
//****************************************************** */
//there are two types of memory  stack and heap 
//where stack and heap used stack always used in primitive data types and heap always used in non-premitive dataq types
let myyoutubename="yashichauhan.com"
let anothername=myyoutubename
anothername="chaiorcode"
console.log(myyoutubename)
console.log(anothername)
let userone={
    email:"user@google.com",
    upi:"user@byl"
}
let usertwo=userone
usertwo.email="yashi@google.com"
console.log(userone.email);
console.log(usertwo.email);