import React, { useState, useEffect } from "react";

const FormValidation = () => {
  const[name , setname] = useState("");
  const[email , setemail] = useState("");
  const[password , setpassword] = useState("");

  const [error, seterror] = useState("");

  useEffect(() => {
    if (form.name === "") {
      seterror("NAME IS REQUIRED");
    } 
    else if (form.email === "") {
      seterror("EMAIL IS REQUIRED");
    }
     else if (!form.email.includes("@")) {
      seterror("RE-ENTER THE EMAIL");
    }
     else if (form.password === "") {
      seterror("ENTER THE PASSWORD");
    }
     else if (form.password.length < 6) {
      seterror("PASSWORD SHOULD BE GREATER THAN 6 DIGITS");
    }
     else {
      seterror("");
    }
  }, [name , email , password]);

  const submit = (e) => {
    e.preventDefault() ;

    if (error === "") {
        alert("FORM SUBMITTED");
    }
    else{
        alert(error);
    }
  }

  return <div>
    <form onSubmit={submit}>

        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
        />

        <br /><br />

        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
        />
        <br /><br />

        <p style={{color:"red"}}>{error}</p>

        <button type="submit">Submit</button>

      </form>
  </div>;
};

export default FormValidation;
