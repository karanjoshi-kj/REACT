import React, { useState , useRef} from 'react'
import { useRef } from 'react';

const Usereff = () => {
    const[couter , setcounter] = useState(1);
    const counter1 = useRef(1);
    const handlechange = () => {
        counter1.current++;
        console.log(counter1.current);
    }
  return (
    <div>
      <button onClick={()=> setcounter(counter + 1)}>Counter : {counter}</button>
      <button onClick={handlechange}>counter11 : {counter1.current}</button>
    </div>
  )
}

export default Usereff
