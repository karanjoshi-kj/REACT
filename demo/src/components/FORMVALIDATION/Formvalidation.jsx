import React, { useState } from 'react'

const Formvalidation = () => {
    const[formdata , setformdata] = useState({
        firstname : "",
        middlename : "",
        lastname : "",
        fathertitle : "MR.",
        fathername:"",
        mothertitle : "MRs.",
        mothername:"",
        dob:"",
    });
    const[error , seterror] = useState("");
    const [sumbitbtn, setsubmitbtn] = useState("");
    
    const handleChange = (e) => {
        const{name , value} = e.target ;

        setformdata({
            ...formdata , 
            [name] : value ,
        });
    };
    
    

const handleSubmit = (e) => {
    e.preventDefault();

    const nameregex =  /^[A-Za-z]+$/ ;

    if(!formdata.firstname){
      seterror("FIRST NAME IS MANDATORY");
    }
    if(!nameregex.test(formadata.firstname)){
      seterror("FIRST NAME CAN ONLY CONTAIN ALPHABETS");
    }
    
    if(formdata.middlename && !nameregex.test(formdata.middlename)){
      seterror("FIRST NAME CAN ONLY CONTAIN ALPHABETS");
    }

    if(!formdata.lasttname){
      seterror("LAST NAME IS MANDATORY");
    }
    if(!nameregex.test(formadata.lastname)){
      seterror("LAST NAME CAN ONLY CONTAIN ALPHABETS");
    }
}
  return (
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
      <label>first name</label>
      <input 
    type="text"
    name="firstname"
    value={formdata.firstname}
    onChange={handleChange}
    placeholder="ENTER FIRST NAME"
      />

      <label>Middle name</label>
      <input 
    type="text"
    name="middlename"
    value={formdata.middlename}
    onChange={handleChange}
    placeholder="ENTER MIDDLE NAME"
      />

      <label>last name</label>
      <input 
    type="text"
    name="lastname"
    value={formdata.lastname}
    onChange={handleChange}
    placeholder="ENTER LAST NAME"
      />
</form>
<pre>
    {JSON.stringify(formdata , null , 2)}
</pre>
    </div>
  )
}

export default Formvalidation
