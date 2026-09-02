function x(){
    let a = 10;
    console.log(a);
    function y(){
        console.log("FUNCTION CALLED");
    }
    return y();
}
const res = x();