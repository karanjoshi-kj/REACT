import React from 'react'

const Filter1 = () => {
  
  const students = [
    {
        id:1,
        "name":"karan",
        "marks":45
    },
    {
        id:2,
        "name":"ram",
        "marks":35
    },
    {
        id:3,
        "name":"sita",
        "marks":55
    },
    {
        id:4,
        "name":"monty",
        "marks":25
    },
    {
        id:5,
        "name":"sonty",
        "marks":15
    },
  ]

  const res = students.filter((check)=>check.marks>30);
    return (
    <div>
      <h1>FILTER'S IN JS</h1>
      {res.map((item) => (
        <p key={item.id}>NAME : {item.name}  |   MARKS : {item.marks}</p>
      ))}
    </div>
  )
}

export default Filter1
