import React, { useState } from 'react'

const Form = () => {
    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        console.log("NAME :" , name);
        console.log("EMAIL : " , email);
        console.log("PASSWORD :" , password);
    }
  return (
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>

      <form onSubmit={handlesubmit}>
        <label>NAME :</label>
        <br/>
        <input type="text" placeholder="ENTER YOUR NAME" value={name} onChange={(e) => setname(e.target.value)}/> <br/>
        <label>EMAIL :</label>
        <br/>
        <input type="email" placeholder="ENTER YOUR EMAIL" value={email} onChange={(e) => setemail(e.target.value)}/> <br/>
        <label>PASSWORD :</label>
        <br/>
        <input type="password" placeholder="ENTER YOUR PASSWORD" value={password} onChange={(e) => setpassword(e.target.value)}/> <br/>
        

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
