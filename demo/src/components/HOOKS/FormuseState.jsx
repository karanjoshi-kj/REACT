import React , {useState} from 'react'

const FormuseState = () => {

  return (
    <div>
        <form onSubmit={handlesubmit}>
        <fieldset>

            <legend>STUDENT REGISTRATION FORM :</legend>
            <input type='text' name='Studentname' id='stname' placeholder='ENTER STUDENT NAME' onChange={handlechange} />

        </fieldset>
        </form>  
    </div>
  )
}

export default FormuseState
