function x(){
    let a = 10;
    function y(){
        console.log("FUNCTION Y IS CALLED");
        console.log(a);  //?10
    }
    return y ;  //! FUNCTION CALL NAHI HUI H 
    console.log("FUNCTION X IS CALLED");
}
console.log("GLOBAL FUNCTION");
let res = x();  //! X KO CALL KIYA H  
// res();
console.log("FUNCTION IS CALLED");





