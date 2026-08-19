import React, { useState } from 'react'

const Formvalidation = () => {
  const [formData, setFormdata] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",

    fathername : "",
    fatherphone : "",

    mothername :"",
    mothername : "",
  });

  const phonehandleChange = (e) => {
    const { name, value } = e.target;

    
    if (!/^[0-9]*$/.test(value)) {
      alert(`${name.toUpperCase()} should only contain numbers`);
      return;
    }

    if (value.length > 10) {
      alert("PHONE should contain exactly 10 digits");
      return;
    }

    setFormdata({
      ...formData,
      [name]: value,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!/^[A-Za-z]*$/.test(value)) {
      alert(`${name.toUpperCase()} should only contain characters`);
      return;
    }

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      formData.phone.length !== 10
    ) {
      alert("All fields in form is Mandatory");
      return;
    }

    if (formData.firstName.length < 3) {
      alert(`FIRST NAME MUST CONTAIN 3 CHARACTERS`);
      return;
    }

    if (formData.lastName.length < 3) {
      alert(`LAST NAME MUST CONTAIN 3 CHARACTERS`);
      return;
    }

    alert(`Form Submitted Successfully`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">FIRST NAME</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter Your First Name"
        />

        <label htmlFor="middleName">MIDDLE NAME</label>
        <input
          type="text"
          name="middleName"
          id="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Enter Your Middle Name"
        />

        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Your Last Name"
        />

        <label htmlFor="phone">PHONE NUMBER</label>
        <input
          type="text"
          name="phone"
          placeholder="ENTER THE PHONE NUMBER"
          value={formData.phone}
          onChange={phonehandleChange}
        />



        <h3>FATHER'S DETAILS</h3>
        <label htmlFor="fathername">FATHER NAME</label>
        <input
        type="text"
        name="fathername"
        value={formData.fathername}
        onChange={handleChange}
        placeholder="ENTER FULL NAME"
        />

        <label htmlFor="fatherphone">FATHER PHONE NUMBER</label>
        <input 
        type="text"
        name="fatherphone"
        id="fatherphone"
        value={formData.fatherphone}
        onChange={phonehandleChange}
        placeholder="ENTER THE PHONE NUMBER"
        />

        <h3>MOTHER'S DETAILS</h3>
        <label htmlFor="mothername">MOTHER NAME</label>
        <input
        type="text"
        name="mothername"
        id="motherphone"
        value={formData.mothername}
        onChange={handleChange}
        placeholder="ENTER FULL NAME"
        />

        <label htmlFor="motherphone">MOTHER PHONE NUMBER</label>
        <input 
        type="text"
        name="motherphone"
        id="motherphone"
        value={formData.motherphone}
        onChange={phonehandleChange}
        placeholder="ENTER THE PHONE NUMBER"
        />

        <button type="submit">Submit</button>

        <pre>
          {formData.firstName + " " +(formData.middleName ? formData.middleName : " ") +" " + formData.lastName +" " + formData.phone}<br/>
          {formData.fathername + " " +(formData.fatherphone)}<br/>
          {formData.mothername + " " +(formData.motherphone)}
        </pre>

      </form>
    </div>
  )
}

export default Formvalidation