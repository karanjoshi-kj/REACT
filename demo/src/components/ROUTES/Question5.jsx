import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Dummydata from './Dummydata.json'
const Question5 = () => {
    const [usercode , setusercode] = useSearchParams();
    const myage = usercode.get("age")
    const mygender = usercode.get("gender")
    const myweight = usercode.get("weight")

    const [userage , setuserage] = useState("")
    const [usergender , setusergender] = useState("")
    const [userweight , setuserweight] = useState("")

    const handlesubmit = () => {
        setusercode({
            myage:userage,
            mygender:usergender,
            myweight:userweight
        });
    };
  return (
    <div>
      <h1>GIVEN ID BY  USER:{userage}</h1>
      <h1>GIVEN NAME BY  USER:{usergender}</h1>
      <h1>GIVEN NAME BY  USER:{userweight}</h1>

      <input 
      type="text"
      placeholder="ENTER ID"
      value={userage}
      onChange={(e) => setuserage(e.target.value)}
      />
      <input 
      type="text"
      placeholder="ENTER NAME"
      value={usergender}
      onChange={(e) => setusergender(e.target.value)}
      />
      <input 
      type="text"
      placeholder="ENTER WEIGHT"
      value={userweight}
      onChange={(e) => setuserweight(e.target.value)}
      />

      <button onClick={handlesubmit}>SETTING THE ID VALUE</button>
    </div>
  )
}

export default Question5
