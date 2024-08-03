/*// sinngleton bject const tinderuser=new Object();
const tinderuser={};
tinderuser.id="123";
tinderuser.name="yashi";
tinderuser.isloggedname=false;
console.log(tinderuser);
/*const regularuser={
    email:"yashichauhan@198.google.com",
    fullname:{
        userfullname:{
            firstname:"yashichauhan",
            lastname:"papa",
        }
    }
}
console.log(regularuser.fullname?.userfullname.lastname);*/
/*const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//const obj4=Object.assign({},obj1,obj2,obj3);
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);
const user=[
    {
        id:1,
        email:"yashichauhan198@gmail.com"
    },
    { id:1,
        email:"yashichauhan198@gmail.com"

    },
]
user[1].email;
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedname'))*/
/******************************************object destructuring********************** */
const course={
    coursename:"abc",
    courseid:1,
    courseinstructor:"yashichauhan"
}
const {courseinstructor : instructor}=course;
console.log(instructor);