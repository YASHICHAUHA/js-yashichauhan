//const coding=["python","ruby","js","cpp","java"];
//const values=coding.forEach((item)=>{
  //  console.log(item);
    //return item;})
//console.log(values);
const coding=[1,2,3,4,5,6,7,8,9,10];
//const newnums=coding.filter((num)=>num>4);//{return num>4}
//console.log(newnums);
//how to use for each
const newnums=[];
coding.forEach((num)=>{
    if(num>4)
    {
        newnums.push(num)
    }
})
console.log(newnums);