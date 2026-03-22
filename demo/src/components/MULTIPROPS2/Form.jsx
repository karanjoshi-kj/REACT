import React from 'react'
import MultipleProps from './MultipleProps'
import studentdata from "./Data.json"

const Form = () => {
  return (
    <div>
        {/* METHOD 1 : HERE WE ALSO PASS THE INDEX BCOZZ IF ANY CHANGES WERE DONE IN THE CODE IT WILL START FORM THERE NO NEED TO START FORM THE STARTING . */}

    {studentdata.map((student , index) =>(
        <MultipleProps key={index} studentdata={student} />
    )
    )}

    {/* {studentdata.map((student) =>(
        <MultipleProps studentdata={student} />
    )
    )} */}
    </div>
  )
}

export default Form
