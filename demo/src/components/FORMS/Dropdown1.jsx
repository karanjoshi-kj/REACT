import React, { useState } from 'react'
const Dropdown1 = () => {
    const subjects = ["javascript" , "operating systems" , "computer networks" , "react" ,"dsa"];
    const [subject , setsubject] = useState("");
  return (
    <div>
      <select onChange={(e) => setsubject(e.target.value)}>
         <option value="">SELECT SUBJECTS</option>
         {subjects.map((item)=>(
            <option value={item} key={item}>{item}</option>
         ))}
      </select>
       <h1>SELECTED SUBJECT : {subject}</h1>
    </div>
  )
}

export default Dropdown1
