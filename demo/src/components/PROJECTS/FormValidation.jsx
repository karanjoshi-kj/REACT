import React, { useState} from "react";

const FormValidation = () => {
  const[name , setname] = useState("");
  const[email , setemail] = useState("");
  const[password , setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("NAME IS REQUIRED");
      return ;
    } 
    if (email === "") {
      alert("EMAIL IS REQUIRED");
      return ;
    }
    if (!email.includes("@")) {
      alert("RE-ENTER THE EMAIL");
      return ;
    }
     if (password === "") {
      alert("ENTER THE PASSWORD");
      return ;
    }
     if (password.length < 6) {
      alert("PASSWORD SHOULD BE GREATER THAN 6 DIGITS");
      return ;
    }
    alert("FORM SUBMITTED");
  };


  return(
   <div>
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


        <button type="submit">Submit</button>

      </form>
  </div>
  );
};

export default FormValidation;
