import React from 'react'
import Dummydata from './Dummydata.json'
import { useSearchParams } from 'react-router-dom'; 
const Usesearchquestion = () => {
    const [userdata] = useSearchParams();
    const firstname = userdata.get("name");
    const lastname = userdata.get("name1");    
    console.log(firstname);
    console.log(lastname);
  return (
    <div>
        <h1>NAME OF USER'S</h1>      
    </div>
  )
}

export default Usesearchquestion
