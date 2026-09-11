// call  first arg is alwtyz the this. object memeber

// const { use } = require("react");

//apply  same as of call method the major difference thise 
const user={
    "name":"Hello",
    course:"Btech"
}

// function x(x1,a,b){
//     console.log(this.x1.name);
//     console.log(a);
//     console.log(b);

// }
// var a=10;
// var b=20;
// x(user,a,b);


function x(a,b){
    console.log(this.course);
    console.log(a);
    console.log(b);
}
var a=10;
var b=20;
// x(user,a,b);
// x.call(user,a,b);
// x.apply(user,[a,b])
// x.bind(this obejct) bind returns the function to a new fucntion 
const newfun=x.bind(user)
newfun(a,b);