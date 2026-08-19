import React, { useState } from 'react'

  const Formvalidation = () => {
  const [formData, setFormdata] = useState({
    firstName: "",
    middleName: "",
   lastName: "",
  });

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

    if (!formData.firstName || !formData.lastName) {
      alert("All fields in form is Mandatory");
      return;
    }

    alert(`Form Submitted Successfully`);
  };
  return (
     <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter Your First Name"
        />
        <label htmlFor="middleName">Middle Name</label>
        <input
          type="text"
          name="middleName"
          id="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Enter Your Middle Name"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Your Last Name"
        />

        <button type="submit">Submit</button>

        <pre>
          {formData.firstName+" "+( formData.middleName?formData.middleName:" ")+" "+formData.lastName}
        </pre>
      </form>
    </div>
  )
}

export default Formvalidation
