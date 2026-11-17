import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Setvaluesonhook = () => {
    const [usercode , setusercode] = useSearchParams();
    const id = usercode.get("id")
    const name = usercode.get("name")

    const [userid , setuserid] = useState("")
    const [username , setusername] = useState("")

    const handlesubmit = () => {
        setusercode({
            id:userid,
            name:username
        });
    };
  return (
    <div>
      <h1>GIVEN ID BY  USER:{id}</h1>
      <h1>GIVEN NAME BY  USER:{name}</h1>

      <input 
      type="text"
      placeholder="ENTER ID"
      value={userid}
      onChange={(e) => setuserid(e.target.value)}
      />
      <input 
      type="text"
      placeholder="ENTER NAME"
      value={username}
      onChange={(e) => setusername(e.target.value)}
      />

      <button onClick={handlesubmit}>SETTING THE ID VALUE</button>
    </div>
  )
}

export default Setvaluesonhook
