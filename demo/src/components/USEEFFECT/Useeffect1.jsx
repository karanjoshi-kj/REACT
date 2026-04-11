import React , {useState , Useeffect} from 'react'
import { useEffect } from 'react';

const Useeffect1 = () => {
  const questiontiming = 5
  const [counter , setCounter] = useState(1);
  const [timing , setTiming] = useState(questiontiming);

  useEffect(()=>{
    setTiming(questiontiming); //it will update the value of timer to 10 whenever called
    const interval = setInterval(() => {
      setTiming((timing) => {
        if (timing === 0) {
          setCounter(counter + 1)
          return 0 ;
        }
        return timing - 1 ;
      });
    }, 1000);

    // TO CLEAR THE VALUE OF THE USESETATE => 
    return () => clearInterval(interval);
  },[counter]);

  const nextbutton = () => {
    setCounter(() => counter + 1);
  };
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h2>Time Left {timing} Seconds</h2>
      <button onClick={nextbutton}>NEXT</button>
    </div>
  )
}

export default Useeffect1

// import React, { useEffect, useState } from 'react'

// const UseEffectDemo = () => {
// 
//     const nextbutton = () => {
//         setCounter(() => counter + 1);
//     };
//     return (
//         <div>
//             <h1 >Counter : {counter}</h1>
//             <h2>Time  Left {timing} seconds </h2>
//             <button onClick={nextbutton}>Next </button>
//         </div >
//     )
// }
// export default UseEffectDemo;

// const [timer, setTimer] = useState(10);
{/* <button onClick={() => setTimer(timer + 3)}>Timer{timer}</button> */ }
{/* Hello */ }

// function helloPrint() {
//     console.log(" Print Hello");
// }
// useEffect(() => {
//     helloPrint();
// }, [counter, timer])

// helloPrint(); //independent in nature
// useState: data to ko store with update values
// useEffect : mainly used to resolve the side effects in the code with various parameters


// useEffect(() => {

// }, dependencies)