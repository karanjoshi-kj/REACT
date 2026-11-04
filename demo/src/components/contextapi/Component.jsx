import React, { useContext } from 'react'
import { UserContext } from './Usercontext';

const Component = () => {
    const data = useContext(UserContext);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Component
