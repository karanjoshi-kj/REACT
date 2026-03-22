import React from 'react'

const MultipleProps = (studentdata) => {
    const {Rollno , Name , Address , Course , Phone} = studentdata ;
  return (
    <div>
      <p>Student Roll number : {Rollno}</p>
      <p>Student Name : {Name}</p>
      <p>Student Address : {Address}</p>
      <p>Student Course : {Course}</p>
      <p>Student phone number : {Phone}</p>
    </div>
  )
}

export default MultipleProps
