import React, { useState, useEffect } from "react";

const FormValidation = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

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
  }, [form]);

  return <div>
    <form>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={update}
        />

        <br /><br />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={update}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={update}
        />

        <br /><br />

        <p style={{color:"red"}}>{error}</p>

        <button type="submit">Submit</button>

      </form>
  </div>;
};

export default FormValidation;
