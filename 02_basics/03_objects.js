//singleton
//Object.create()
//object literals
//how  to declare symbol
const mysym=Symbol["Key1"]
const jsuser={
name:"Hitesh",
"full name":"yashi chauhan",
location:"Jaipur",
Email:"yashichauahn@google.com",
[mysym]:"mykey1",
isloggedin:false,
lastLogindays:["Moday","saturday"]
}
console.log(jsuser.Email)
console.log(jsuser["email"])
console.log(jsuser["full name"]);
console.log(jsuser[mysym])
jsuser.Email="yashichauhan@chatgpt.com"
//Object.freeze(jsuser);
jsuser.Email="yashivikas@gmail.com"
console.log(jsuser["Email"])
jsuser.greeting=function()
{
    console.log("hello all the js user");

}

console.log(jsuser.greeting())
jsuser.greetingstwo=function()
{
console.log(`hello yashi chauhan,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingstwo());