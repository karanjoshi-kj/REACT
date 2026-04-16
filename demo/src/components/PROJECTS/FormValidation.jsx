import React, { useState } from 'react'

const FormValidation = () => {

    const [form , setform] = useState({
        name : "",
        email : "",
        password : ""
    });

   const updation = () => {
    if (form.name === "") {
        alert("NAME IS REQUIRED")
    }

    if (form.email === "") {
        alert("EMAIL IS REQUIRED");
    }
    else if (!form.email.includes("@")) {
        alert("RE-ENTER THE EMAIL");
    }

    if (form.password === "") {
        alert("ENTER THE PASSWORD");
    }
    else if (form.password.length < 6) {
        alert("PASSWORD SHOULD BE GREATER THEN SIX DIGITS");
    }
   }
  return (
    <div>
<form>
    <label>Name</label>
    <input type='text' name='name' /> <br></br>

    <label>Email</label>
    <input type='email' name='email' /> <br></br>

    <label>Password</label>
    <input type='password' name='password' /><br></br>
   
   <button type='submit'>SUBMIT</button>

   <updation/>
</form>
    </div>
  )
}

export default FormValidation
