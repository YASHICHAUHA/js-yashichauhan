//******************mappppp*********************/
const mynumbers=[1,2,3,4,5,6,7,8,9,10];
//const newnums=mynumbers.map((num)=>num+10)
const newnums=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
//console.log(newnums);
//*************************reduce******************** */
/*const nums=[1,2,3,4,5];
const mytotal=nums.reduce(function(acc,currval){
    console.log(`acc:${acc}and currval:${currval}`)
    return acc+currval
},0);
console.log(mytotal)*/
//****************************************by using aarrow function******** */
const nums=[1,2,3,4,5];
mytotal=nums.reduce((acc,curr)=>acc+curr,0)
//console.log(mytotal)
const shoppingcar=[{
    itemname:"python caurse",
    price:2888
},
{
    itemname:"mobile caurse",
    price:28889
},
{
    itemname:"cpp course",
    price:2887
},
{
    itemname:"yashi caurse",
    price:2888
},
]
const tott=shoppingcar.reduce((acc,item)=>acc+ item.price,0)
console.log(tott)
