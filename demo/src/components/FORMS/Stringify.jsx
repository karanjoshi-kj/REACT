import React, { useState } from 'react'

const Stringify = () => {
    const [selectedSub, isselectedSub] = useState({
        "C": false,
        "CPP": false,
        "CN": false,
        "DBMS": false,
        "JAVA": false,
    });
    
    const handleChange = (e) => {
        const { name, checked } = e.target;
        
        // console.log("Subject:", name, " | Selected:", checked);

        isselectedSub({
          ...selectedSub,
          [name]: checked,
        });
    }

  return (
    <div>
      <h1>SELECT SUBJECTS</h1>
      
      <input type="checkbox" name="C" checked={selectedSub.C} onChange={handleChange} /> C
      <br/>
      <input type="checkbox" name="CPP" checked={selectedSub.CPP} onChange={handleChange} /> CPP
      <br/>
      <input type="checkbox" name="CN" checked={selectedSub.CN} onChange={handleChange} /> CN
      <br/>
      <input type="checkbox" name="DBMS" checked={selectedSub.DBMS} onChange={handleChange} /> DBMS
      <br/>
      <input type="checkbox" name="JAVA" checked={selectedSub.JAVA} onChange={handleChange} /> JAVA


      <pre>{JSON.stringify(isselectedSub , null , 2)}</pre>
    </div>
  )
}

export default Stringify