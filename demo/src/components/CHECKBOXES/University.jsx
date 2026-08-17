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


       <h1>COURSE NAME</h1>
      <select disabled={!clgname} value={coursename} onChange={(e)=>{setcoursename(e.target.value);}}>
        <option value="">SELECT COURSE</option>
        {Object.keys(universitydata[universityname]?.[clgname] || {}).map((coursename)=>(
          <option key={coursename} value={coursename}>{coursename}</option>
        ))}
      </select>


     <h1>BRANCH NAME</h1>
     <select disabled={!coursename} value={branchname} onChange={(e)=>{setbranchname(e.target.value);}}>
      <option value="">SELECT BRANCH</option>
      {(universitydata[universityname]?.[clgname]?.[coursename] || []).map((branchname)=>(
        <option key={branchname} value={branchname}>{branchname}</option>
      ))}
     </select>




      <h1>{universityname}</h1>
      <h1>{clgname}</h1>
      <h1>{coursename}</h1>
      <h1>{branchname}</h1>
    </div>
  )
}

export default University




// CREATE A VALIDATION FORM --> STUDENT REGISTRATION FORM 
// 1. NAME IS DIVIDED IN 3 SECTORS (FIRST,MIDDLE,LAST : FIRST & LAST ARE MANDATORY) 
//  USER CANNOT ENTER DIGIT AND SPECIAL CH IN NAME ALSO NO SPACE 
// 2. OUTPUT ON THE SCREEN ON CLICK SUBMIT BUTTON 
// 3. COMBINED NAME .

// 1. MATA - PITA KA NAMM (ALSO DROPDOWN OF MR , MRS.)
// 2. DOB => CLAENDAR KHULNA CHAIYE .
