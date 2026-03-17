import React from 'react'
import MultipleProps from './MultipleProps';

const Form = () => {
    const studentdata = {
        "rollno":"1",
        "name":"karan",
        "address":"ranikhet",
        "course":"btech",
        "age":"20"
    }
    const{rollno , address , course , age} = studentdata ;
  return (
    <div>
      <MultipleProps roll={rollno} stname={name} stcourse={course} add={address} stage={age}/>
    </div>
  )
}

export default Form
