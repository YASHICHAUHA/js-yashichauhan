
function Saymyname()
{
console.log("Y");
console.log("A");
console.log("S");
console.log("I");
}
//Saymyname()
/*function addtwo(num1,num2)
{
    console.log(num1+num2);
}
const result=addtwo(5,7);
console.log("result:",result);*/
/*function addtwonumber(num1,num2){
    return num1+num2;
}
const result=adfdtwonumber(3,5)
console.log("resiult:",result);*/
function loginusermessage(username="chinu")
{
    if(!username)
    {
        console.log("please eneter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginusermessage("yashi chauhan"));
//console.log(loginusermessage());
function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}
//console.log(calculateCartPrice(200,300,400,50000))
const user={
    username:"yashichauhan",
    price:199
}
function handleobjetc(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}

//handleobjetc(user);
handleobjetc({
     usrename:"yashi",
    price:399
})
const mynewarray=[200,300,400,500,800]
function returnsecondvalue(getarray)
{
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue[200,300,400,500,800]);

 