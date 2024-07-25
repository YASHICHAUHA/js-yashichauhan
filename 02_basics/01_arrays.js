const myarr=[1,2,3,5,6,8];
const myarr2=[45,67,89,90,9000];
//console.log(myarr2[3]);
//myarr.push(6)
//myarr.push(7)
//myarr.pop()
//myarr.unshift(9);
//myarr.shift()
//console.log(myarr.includes(9));
//console.log(myarr.indexOf(19));
//console.log(myarr);   
//*************slice splice******************//  
console.log("A",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr); 
const myn2=myarr.splice(1,3);
console.log("C",myarr);
console.log(myn2);
