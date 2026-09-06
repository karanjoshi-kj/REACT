let a = new Set([10,20,30,40,40,10])
//? ONLY PRINT THE UNIQUE VALUES IN THE OBJECT FORMAT .
console.log(a);

//! SET OPERATIONS 
//? 1.  ADDING AN ELEMENT IN THE LAST OF THE SET .

a.add(500);
console.log(a);

a.add(20);  //TODO  ONLY APPENDS THE UNIQUE ELEMENT , NO DUPLICATE 
console.log(a);




//? 2.   TO CHECK IF VALUE EXIST OR NOT .
//TODO  RETURNS TRUE IF THE VALUE EXIST AND FALSE IF THE VALUE DOES'NT EXIST .

console.log(a.has(30));   //? RETURNS TRUE
console.log(a.has(300));   //? RETURNS FALSE  

//?  3. TO DELETE AN ELEMENT 
a.delete(10);
console.log(a);



//? 4. TO CHECK SIZE 
console.log(a.size);   //! REMOVE THE DUPLICATES


//? 5. TO CLEAR THE COMPLETE SET
// console.log(a.clear);


//? 6. LOOPING
a.forEach((i)=>{
    console.log(i);
})

//?  KEY CONCEPT ==> IN JS SETS EACH VAUE IS ITSELF KEY AND VALUE .

let num = new Set([10,20,30,40,50,60]);
let res = num.keys();
console.log(res);

let val = num.values();
console.log(val);
