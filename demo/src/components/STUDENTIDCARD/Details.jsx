import React from 'react'

const Details = ({img, stname , add , sal , prof}) => {

  //!  THIS IS THE SECOND WAY TO PASS THE COMPLETE DATA AT ONCE , HERE WE DESTRUCTURE THE JSON VARIABLE IN WHICH WE HAVE STORED THE DATA . ==> LINE NUMBER 6 .
  //? const Details = ({studentid}) => {
//? const {img , stname , add , sal , prof} = studentid 

  return (
    <div>
      <img src={img} alt='DETAILS NOT FOUND'/>
      <p>Student name : {stname}</p>
      <p>Student address : {add}</p>
      <p>Student salary : {sal}</p>
      <p>Student profession : {prof}</p>
    </div>
  )
}

export default Details
