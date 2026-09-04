//!  FOR IN LOOP ITERATES OVDR INDEX 

const user = {
    name : "karan",
    age : "20",
    course : "B.TECH"
}
//? ACCESSING THE INDEX OR KEY VALUES
for(let i in user){
    console.log(i);
}


//! FOR OF LOOP DIRECTLY ITERATES OVER THE VLAUES ==> IT DOES'NT DIRECTLY ITERATES OVER THE OBJECTS , IT CAN ITERATE ONLY OVER THE ARRAY .
const values = [10 , 20 , 30 , 40]
for(let i of values){
    console.log(i);
}


//! THIS IS THE ANOTHER METHOD BY WHICH WE CAN PERFORM THE WORK OF [FOR OF] LOOP USING [FOR IN] LOOP BCOZZ AFTER GETTING THE INDEX WE CAN EASILY FETCH THE VALUES .
for(let i in user){
    console.log(user[i])
}