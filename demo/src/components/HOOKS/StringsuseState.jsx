import React , {useState} from 'react'

const StringsuseState = () => {
    const[username , setusername] = useState("");
  return (
    <div>
        <label htmlFor='name'>User Name :</label>
        <input type='text' name='username' id='name' value={username} onChange={(e) => setusername(e.target.value)}/>
        <p>{username}</p>
    </div>
  )
}

export default StringsuseState
