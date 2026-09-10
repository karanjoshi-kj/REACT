//! CLOSURE IN JS 

//? CLOSURE FUNCTION M CHILD FUNCTION APNI PURI DEFINATION KO PARENT FUNCTION KO RETURN KARTA HAI .
//? PARENT FUNCTIONS KE SAREEI BODY (VARIABLES , FUNCTIONS)  SABB YADD RAKHTA HAI .
//? FUNCTION + LEXICAL SCOPE = CLOSURE  .


//!  BASIC SNIPET
function x(){
    var b = 10;
    function y (){
        console.log(b);
    }
    y();
}
x();


//!  BASIC LOGIC QUESTION 
function inc(){
    var a = 10 ;
    function y(){
        a++;
        console.log(a);
    }
    return y;
}
const cc = inc();
cc();
cc();
cc();