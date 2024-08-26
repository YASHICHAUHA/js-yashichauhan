// immediately invoked function expression (IIFE)//

(function chai()
{
    console.log(`DB connected`);
})();
//;semicolon is mendetory in iife
((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('yashi chauhan')