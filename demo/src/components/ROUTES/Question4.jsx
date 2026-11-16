import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Dummydata from './Dummydata.json'
const Question4 = () => {
    const [userdata] = useSearchParams();
      const userdeatils1 = userdata.get("age")
      const userdeatils2 = userdata.get("gender")
      const userdeatils3 = userdata.get("weight")

    //   console.log(userdeatils1);
    //   console.log(userdeatils2);
    //   console.log(userdeatils3);

    const result = Dummydata.users.filter((check)=>check.age > 30 ||  check.gender === "female" || check.weight > 50 );
      
  return (
    <div>
      <h1>HELLO</h1>
      {result.map((item)=>(
        <p>age : {item.age} | gender : {item.gender} | weight : {item.weight}</p>
      ))}
    </div>
  )
}

export default Question4
