import React from 'react'
import { userContext } from './Usercontext';

const User = () => {
    const u =userContext(userContext)
  return (
    <div>
      <h1>HELLO{u}</h1>
    </div>
  )
}

export default User
