import React , {useState , useEffect} from 'react'

const Statedependency = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    
     function helloPrint(){
        console.log("RADHE RADHE")
      }
      useEffect(() => { 
        helloPrint();
      } , [counter , timer]);
  return (
    <div>
     <button onClick={() => setCounter(counter + 1)}>COUNTER {counter}</button>
     <button onClick={() => setTimer(timer + 3)}>TIMER {timer}</button>
    </div>
  )
}

export default Statedependency
