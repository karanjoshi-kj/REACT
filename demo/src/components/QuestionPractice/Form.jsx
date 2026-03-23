import React from 'react'

const Form = () => {

    const formdata = {
        Name:" ",
        Email:" ",
        Age:" ",
        Gender:" "
    };
  return (
    <div>
      <div className='container'>
        <h2>Form</h2>

        <input type='text' name='Name' placeholder='ENTER NAME'/><br></br>
        <input type='email' name='Email' placeholder='ENTER EMAIL'/><br></br>
        <input type='number' name='Age' placeholder='ENTER AGE'/><br></br>

        <select name='Genader'>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select><br></br>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default Form
