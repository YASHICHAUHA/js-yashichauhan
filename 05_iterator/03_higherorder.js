const arr=[1,2,3,4,5,6,7];
for(const  num of arr)
{
    //console.log(num);
}
const greetings="hello yashichauhan"
for(const grets of greetings)
{
    //console.log(`char of each ${grets}`);
}
//***************map***************************/
const map=new Map();
map.set('In',"INDIA");
map.set('USA',"United state of America");
map.set('can',"canada");
for(const [key,value] of map)
{
    //console.log(key ,":-", value);
}
const myobject={
    js:"javascript",
    cpp:"cPP",
    rb:"ruby",
    swift:"swift for apple"
}
for(const key in myobject)
{
    //console.log(`${key} is shortcut used for ${myobject[key]}`);
}
const arrow =["py","cpp","java","html","css","react"];
for(const key in arrow)
{
console.log(arrow[key])
}