import React from 'react'

const Details = ({image , name , address , salary , profession}) => {
  return (
    <div>
      <p>Student img : {image}</p>
      <p>Student stname : {name}</p>
      <p>Student add : {address}</p>
      <p>Student sal : {salary}</p>
      <p>Student prof : {profession}</p>
    </div>
  )
}

export default Details
