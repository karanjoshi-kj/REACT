import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axiosget = () => {
    const[userdata , setuserdata] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res); //? IT WILL PRINT ALL VALUES IN THE CONSOLE .
            setuserdata(res.data); //? TO PRINT ONLY DATA IN THE CONSOLE .
        }).catch((e)=>{
            console.log(e);
        })
    },[]);
  return (
    <div>
      <h1>LEARNING AXIOS</h1>
      {userdata.map((user)=>(
        <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Axiosget
