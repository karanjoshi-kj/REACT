import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Question1 = () => {
    const[printdata , setprintdata] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
            setprintdata(result.data);
            
        }).catch((e)=>{
            console.log(e);
        })
    },[]);
  return (
    <div>
      <h1>JOSN DATA FOR QUESTION PRATICE</h1>
      {printdata.map((dummydata) => (
        <div key={dummydata.id}>
            <h1>{dummydata.title}</h1>
        </div>
))}
    </div>
  )
}

export default Question1
