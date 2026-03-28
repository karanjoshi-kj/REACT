//! THIS IS NOT A GOOD WAY TO PERFORM TASKS .
//? Q. PRINT THE NAME ON THE BUTTON CLICK .



import React , {useState} from 'react'
const[username , setusername] = useState("");
const[displayname , setdisplayname] = useState("");
function handlechange(){
    setdisplayname(username);
}
const MultiuseState = () => {
  return (
    <div>
      <label htmlFor='name'>User Name :</label>
      <input type='text' name='username' id='name' value={username} onChange={(e) => setusername(e.target.value)}/>
      <button onClick={handlechange}>GET NAME</button>
      <p>{displayname}</p>
    </div>
  )
}

export default MultiuseState
