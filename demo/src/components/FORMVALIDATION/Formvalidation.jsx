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

    const handleChange = (e) => {
        const{name , value} = e.target ;

        setformdata({
            ...formdata , 
            name : value ,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const nameregex =  /^[a-zA-Z ]*$/ ;

    if(!formdata.firstname){
        seterror("FIRST NAME IS REQUIRED");
        return ;
    }
    if(!nameregex.test(formdata.firstname)){
        seterror("FIRST NAME CAN ONLY CONTAIN THE ALPHABETS , NO VALUES OR SPECIAL CHARATER");
        return;
    }

    formdata.middlename ? (!formdata.middlename && !nameregex.test(formdata.middlename)) : "" ;

    if(!formdata.lastname){
        seterror("LAST NAME IS REQUIRED");
        return ;
    }
    if(!nameregex.test(formdata.lastname)){
        seterror("LAST NAME CAN ONLY CONTAIN THE ALPHABETS , NO VALUES OR SPECIAL CHARATER");
        return;
    }

}
  return (
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>
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

    </div>
  )
}

export default Formvalidation
