const marvelheroes=["thor","ironman","spiderman"];
const dc=["supermab","flash","batman"];
//marvelheroes.push(dc);
//console.log(marvelheroes);
// console.log(marvelheroes[3][1]);
//const yashi= marvelheroes.concat(dc)
 //console.log(yashi);
 //************************spread operator*******************************//
 const allnew=[...marvelheroes,...dc];
 //console.log(allnew);
 const another_array=[1,2,3,[4,5,6],7,[8,9,10,[55,22]],11];
 const real=another_array.flat(Infinity);
 console.log(real);
 console.log(Array.isArray("hitesh"))
 console.log(Array.from("Hitesh"))
 console.log(Array.from({name:"hitesh"}))//interesting case fo us as the purpose of interview
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));
 
