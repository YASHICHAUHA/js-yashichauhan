/*****************THIS FUNCTION*********************/
/*const user={
    username:"yashichauhan",
    price:999,
    welcomemessage:function()
    {
        console.log(`${this.username},welcome to the website`);
        //console.log(this);
    }
}
//user.welcomemessage();
//user.username="vikas"
//user.welcomemessage()
console.log(this);*/

//function chai(){
    //this is node environment
  //  let username="yashi chauhan"
    //console.log(this.username);
//}
//chai()
/***********************arrow function****************************/
/*const chai=()=>
{
    let username="yashi chauhan"
    console.log(this.username);
}
chai();*/
/*const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4));*/
/*****************implicit return*****************************************/
//const addtwo=(num1,num2)=>(num1+num2)
//console.log(addtwo(8,9));
const addtwo=(num1,num2)=>({username:"yashi chauhan"});