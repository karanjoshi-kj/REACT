
//! SYNTAX
//! useState: data to ko store with update values
//! useEffect : mainly used to resolve the side effects in the code with various parameters


//? useEffect(() => {

//? }, dependencies)



import React , {useState , Useeffect, useEffect} from 'react'

const Useeffect = () => {
    const[counter , setcounter] = useState(0);
    const[timer , settimer] = useState(0);

    function helloprint(){
        console.log("print hello");
    }
    useEffect(()=>{
        helloprint();  // NOT INDEPENDENT IN NATURE DUE TO USEEFFECT 
    } , [])

    helloprint();   //THIS IS INDEPENDENT IN NATURE
  return (
    <div>
      <button onClick={() => setcounter(counter+1)}>COUNTER {counter}</button>
      <button onClick={() => settimer(timer+1)}>TIMER {timer}</button>
    </div>
  )
}

export default Useeffect
