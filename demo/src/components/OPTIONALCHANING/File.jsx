//! OPTINAL CHANING SAYS THAT IF THE VALUE IS PRESENT IN THE OBJECT THEN RETURN THE VALUE OTHERWISE RETURN UNDEFINED (JUMP FROM IT)..

const user = {
    "name":"karan",
    "age":21,
    "course":"b.tech"
}
console.log(user);
console.log(user.name);
console.log(user?.domain);   //? HERE WE USE OPTIONAL CHAINING ==> OBJECTVALUE?.VALUE 
//TODO   IT WILL RETURN UNDEFINED .