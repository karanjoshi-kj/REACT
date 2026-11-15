import React from 'react'
import { useSearchParams } from 'react-router-dom'; 

const Usesearchparams = () => {
    const [usercode] = useSearchParams(); 
    const id = usercode.get("id");
    console.log(id);
    
  return (
    <div>
      <div>HELLO</div>
    </div>
  )
}

export default Usesearchparams