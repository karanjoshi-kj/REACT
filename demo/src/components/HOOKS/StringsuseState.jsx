import React , {useState} from 'react'

const StringsuseState = () => {
    const[username , setusername] = useState("");
  return (
    <div>
        <input type='text' name='username' id='name' value={username} onChange={(e) => setusername(e.target.value)}/>
    </div>
  )
}

export default StringsuseState
