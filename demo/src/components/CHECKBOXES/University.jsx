import React, { useState } from 'react'
import universitydata from "./Universitydata.json";
const University = () => {
    const[universityname , setuniversityname] = useState("");
    const[clgname , setclgname] = useState("");
    const[coursename , setcoursename] = useState("");
    const[branchname , setbranchname] = useState("");
  return (
    <div>
      <h1>UNIVERSITY NAME</h1>
      <select value={universityname} onChange={(e) => {setuniversityname(e.target.value)}}>
        <option>SELECT UNIVERSITY</option>
      {Object.keys(universitydata).map((universityname)=>(
        <option key={universityname} value={universityname}>{universityname}</option>
      ))}
      </select>



      <h1>COLLEGE NAME</h1>
      <select disabled={!universityname} value={clgname} onChange={(e)=>{setclgname(e.target.value)}}>
      <option>SELECT COLLEGE</option>
      {Object.keys(universitydata[universityname] || {}).map((clgname)=>(
        <option key={clgname} value={clgname}>{clgname}</option>
      ))}
      </select>





      <h1>{universityname}</h1>
      <h1>{clgname}</h1>
    </div>
  )
}

export default University
