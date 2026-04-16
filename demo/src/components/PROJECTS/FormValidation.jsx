import React from 'react'

const FormValidation = () => {
  return (
    <div>
<form>
    <label>Name</label>
    <input type='text' name='name' />

    <label>Email</label>
    <input type='email' name='email' />
    <label>Password</label>
    <input type='password' name='password' />
   
   <button type='submit'>SUBMIT</button>
</form>
    </div>
  )
}

export default FormValidation
