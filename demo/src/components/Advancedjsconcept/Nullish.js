const user={
    "name":"karan",
    "age":25,
    marks:"",

    //? "course":null,
}

//! Nullish operator will run the false condition only in 2 parameters: null, undefined
// !OR || will run in various  : false , 0, empty String, null, undefined , NaN
console.log(user.marks||"AB")
console.log(user.marks??"AB")