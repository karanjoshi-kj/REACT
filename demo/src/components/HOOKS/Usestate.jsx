import React , {useState} from 'react'

const Usestate = () => {
    const [count , setcount] = useState(1) ;
    console.log(count);
  return (
    <div>
        <button onClick={() => setcount(count + 1)}>CLICK ME TO UPDATE THE COUNTER</button>

        {/* TO PRINT THE VALUE IN THE FORMAT OF DOM . */}
        <h1>{count}</h1>    
    </div>
  )
}

export default Usestate
