import React from 'react'
import { useSearchParams } from 'react-router-dom';
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
const Question3 = () => {
    const [userdata] = useSearchParams();
      const studentmarks = userdata.get("marks")
    const res = students.filter((check) => check.marks > 30);
  return (
    <div>
      <h1>STUDENT MARKS : {studentmarks}</h1>
      {res.map((item) => (
       <p>{item.marks}</p>
      ))}
    </div>
  )
}
export default Question3
