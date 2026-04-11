import React , {useState , Useeffect} from 'react'
import { useEffect } from 'react';

const Useeffect1 = () => {
  const questiontiming = 5
  const globaltime = 30
  const [counter , setCounter] = useState(1);
  const [timing , setTiming] = useState(questiontiming);
  const [globaltimer , setglobaltimer] = useState(globaltime);
  const [stop , setstop] = useState(false);

  useEffect(()=>{
    if(stop) 
      return ; 

    const globalinterval = setInterval(()=>{
      setglobaltimer((time)=>{
        if (time === 0) {
          setstop(true);
          alert("TIME IS UP");
          return 0 ;
        }
        return time - 1 ;
      })
    } , 1000)

    return () => clearInterval(globalinterval)
  } , [stop]);

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
