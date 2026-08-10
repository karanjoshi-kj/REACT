import React, { useState } from 'react'

const Stringify2 = () => {

  const subjects = ["C" , "CPP" , "JAVA" , "CN" , "DBMS" , "TOC" , "AI"];
    const [selectedSub, isselectedSub] = useState([]);
    
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
const handleselectall = (e) => {
    const checked = e.target.checked ;
    if(checked){
        isselectedSub({
            C:true,
            CPP:true,
            CN:true,
            DBMS:true,
            JAVA:true
        });
    }
    else{
        isselectedSub({
            C:false,
            CPP:false,
            CN:false,
            DBMS:false,
            JAVA:false

        });
    }
}

  return (
    <div>
      <h1>SELECT SUBJECTS</h1>
      <input type="checkbox" checked={Object.values(selectedSub)}/> SELECT ALL 
      <br/>
      
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

export default Stringify2

