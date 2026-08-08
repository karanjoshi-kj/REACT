import React, { useState } from 'react'

const Stringify = () => {

  const subjects = ["C" , "CPP" , "JAVA" , "CN" , "DBMS" , "TOC"];
    const [selectedSub, isselectedSub] = useState({
        "C": false,
        "CPP": false,
        "CN": false,
        "DBMS": false,
        "JAVA": false,
        "TOC": false,
    });
    
    const handleChange = (e) => {
        const { name, checked } = e.target;
        
        // console.log("Subject:", name, " | Selected:", checked);

        const count = Object.values(selectedSub).filter(value => value === true).length;
        if(count === 3 && checked){
          alert("3 HEE SUBJECT LEGA");
          return;
        }
        isselectedSub({
          ...selectedSub,
          [name]: checked,
        });


        if(count === 2 && checked){
          alert("ONLY 3 SUBJECT SELECTION");
        }
    }

  return (
    <div>
      <h1>SELECT SUBJECTS</h1>
      
      {subjects.map((Subject , index)=>(
        <div key={index}>
          <input type="checkbox" name={subjects[index]} checked={selectedSub[subjects[index]]} onChange={handleChange}/>
          {subjects[index]}
          <br/>
        </div>
      ))}


      <pre>{JSON.stringify(selectedSub , null , 2)}</pre>
    </div>
  )
}

export default Stringify

