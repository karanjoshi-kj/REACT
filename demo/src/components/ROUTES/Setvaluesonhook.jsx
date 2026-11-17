import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Setvaluesonhook = () => {
    const [usercode , setusercode] = useSearchParams();
    const id = usercode.get("id")
    const name = usercode.get("name")
  return (
    <div>
      <h1>GIVEN ID BY  USER:{id}</h1>
      <h1>GIVEN NAME BY  USER:{name}</h1>
      <button onClick={()=>setusercode({id:"100",name:"karan"})}>SETTING THE ID VALUE</button>
    </div>
  )
}

export default Setvaluesonhook
