import React, { useState , useRef} from 'react'

const Usereff = () => {
    const[counter , setcounter] = useState(1);
    const counter1 = useRef(1);
    const handlechange = () => {
        counter1.current++;
        console.log(counter1.current);
    }
  return (
    <div>
      <button onClick={()=> setcounter(counter + 1)}>Counter : {counter}</button>
      <button onClick={handlechange}>counter1 : {counter1.current}</button>
      <img src='https://images.unsplash.com/photo-1776066361565-d0a6cac89c9b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='IMAGE NOT FOUND'></img>

    </div>
  )
}

export default Usereff ;
