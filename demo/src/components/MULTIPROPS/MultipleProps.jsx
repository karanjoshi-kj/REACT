import React from 'react'

const MultipleProps = ({roll , stname , add , stage , stcourse}) => {

  return (
    <div>
      <p>Student Rollno : {roll}</p>
      <p>Student name : {stname}</p>
      <p>Student address : {add}</p>
      <p>Student age : {stage}</p>
      <p>Student course : {stcourse}</p>
    </div>
  )
}

export default MultipleProps
