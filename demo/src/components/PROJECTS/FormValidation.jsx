import React from 'react'

const FormValidation = () => {
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
</form>
    </div>
  )
}

export default FormValidation
