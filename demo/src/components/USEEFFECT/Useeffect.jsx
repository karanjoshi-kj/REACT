import React , {useState , Useeffect, useEffect} from 'react'

const Useeffect = () => {
    const[counter , setcounter] = useState(0);
    const[timer , settimer] = useState(0);

    function helloprint(){
        console.log("print hello");
    }
    useEffect(()=>{
        helloprint();
    })
  return (
    <div>
      
    </div>
  )
}

export default Useeffect
