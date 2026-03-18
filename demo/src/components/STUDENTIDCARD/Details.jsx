import React from 'react'

const Details = ({img, stname , add , sal , prof}) => {
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
