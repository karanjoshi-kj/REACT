import React , {useState} from 'react'

const StringsuseState = () => {
    const[username , setusername] = useState("");
  return (
    <div>
        <input type='text' name='username' id='name' value={username} onChange={}></input>
    </div>
  )
}

export default StringsuseState
