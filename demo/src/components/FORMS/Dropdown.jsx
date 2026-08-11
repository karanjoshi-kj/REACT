import React, { useState } from 'react'

const Dropdown = () => {
    const [subject , setsubject] = useState("");
  return (
    <div>
      <select onChange={(e) => setsubject(e.target.value)}>
        <option value="">SELECT SUBJECTS</option>
        <option value="React">REACT</option>
        <option value="javascript">JS</option>
        <option value="operating system">OS</option>
        <option value="computer networks">CN</option>
      </select>
      <h1>SELECTED SUBJECT : {subject}</h1>
    </div>
  )
}

export default Dropdown
