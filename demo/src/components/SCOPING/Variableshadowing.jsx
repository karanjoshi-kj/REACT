//!  VARIABLE SHADOWING => JAB INNER SCOPE MAI SAME VARIABLE DECALRE HO JATA H JO OUTER SCOPE KE VARAIBLE KO TEMPORARILY BASIS PAR HIDE KAR DETA H .
//!  YHA SARA GAME VARAIBLE DEFINING KA H .

let x = 10 ;

function test(){
    let x = 20;
    console.log(x);  //? 20
}
test();
console.log(x);   //? 10
