import React, { useContext } from 'react'
import { UserContext } from './Usercontext';

const User = () => {
    const u =useContext(UserContext)  //? useContext function context api ko component ko call karne ke liye use hota hai .. 
  return (
    <div>
      <h1>HELLO{u}</h1>
    </div>
  )
}

export default User
