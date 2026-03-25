import React from "react";

const Form = () => {
  const formdata = {
    Name: " ",
    Email: " ",
    Age: " ",
    Gender: " ",
  };

  
  const data = () => {
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const age = document.getElementById("Age").value;
    const gender = document.getElementById("Gender").value;

    document.getElementById("output").innerHTML = `
        <h1>SUBMITTED DATA</h1>
        name : ${Name} </br>
        email : ${Email} </br>
        age : ${Age} </br>
        gender : ${Gender} </br>
        `;
  };


  return (
    <div className="container">
      <h2>Form</h2>

      <input type="text" id="Name" placeholder="ENTER NAME" />
      <br></br>
      <input type="email" id="Email" placeholder="ENTER EMAIL" />
      <br></br>
      <input type="number" id="Age" placeholder="ENTER AGE" />
      <br></br>

      <select id="Gender">
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br></br>

      <button onClick={data}>Submit</button>
      <div id="output"></div>
    </div>
  );
};

export default Form;
