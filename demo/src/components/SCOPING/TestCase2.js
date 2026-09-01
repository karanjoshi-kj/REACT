function x(){
    let a = 10 ;
    function y(){
        let b = 20 ;
        function q(){
            console.log(b);
        }
        return q;
    }
    return y();
}
const res = x();