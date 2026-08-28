import React, { useState } from 'react'

const Formvalidation = () => {

  const [formData, setFormdata] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    dob: "",
    age: "",

    fathername: "",
    fatherphone: "",

    mothername: "",
    motherphone: "",

    password: ""
  })

  const password = formData.password ;
  const passwordRules = {
    length : password.length >= 8 ,
    captial : /[A-Z]/.test(password),
    small : /[a-z]/.test(password),
    special : /[!@#$%^&*]/.test(password),
  };

  const phonehandleChange = (e) => {
    const { name, value } = e.target

    if (!/^[0-9]*$/.test(value)) {
      alert(`${name.toUpperCase()} should only contain numbers`)
      return
    }

    if (value.length > 10) {
      alert("PHONE should contain exactly 10 digits")
      return
    }

    setFormdata({
      ...formData,
      [name]: value,
    })
  }


  const handleChange = (e) => {
    const { name, value } = e.target

    if (name !== "dob" && name !== "password" && !/^[A-Za-z ]*$/.test(value)) {
      alert(`${name.toUpperCase()} should only contain characters`)
      return
    }

    if (name === "dob" ) {

      const age = calculateage(value)

      setFormdata({
        ...formData,
        dob: value,
        age: age
      })

      return
    }

    setFormdata({
      ...formData,
      [name]: value,
    })
  }


  const calculateage = (dob) => {

    if (!dob) {
      return ""
    }

    const currentDate = new Date()
    const dobDate = new Date(dob)

    let years =
      currentDate.getFullYear() - dobDate.getFullYear()

    let months =
      currentDate.getMonth() - dobDate.getMonth()

    let days =
      currentDate.getDate() - dobDate.getDate()

      if(days < 0){
        months--   //! AGAR DAYS NEGATIVE HOGE TO EK BORROW MONTS M SE LUGA ..


        //? BORROWED MONTH KE TOTAL DAYS , DAYS M ADD KARNE HAI ..
        const previousmonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        );
        days += previousmonth.getDate();
      }

    if (months < 0) {
      years-- ;
      months += 12 ;    //! 1 YEAR M 12 MONTHS H TO USSE ADD KARNA PADEGA ..
    }
    return `${years} years ${months} months and ${days} days`
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.firstName ||
      !formData.lastName ||
      formData.phone.length !== 10
    ) {
      alert("All fields in form is Mandatory")
      return
    }

    if (formData.firstName.length < 3) {
      alert(`FIRST NAME MUST CONTAIN 3 CHARACTERS`)
      return
    }

    if (formData.lastName.length < 3) {
      alert(`LAST NAME MUST CONTAIN 3 CHARACTERS`)
      return
    }

    if(!passwordRules.length){
      alert("PASSWORD MUST CONTAIN 8 CHARATERS")
      return 
    }
    if(!passwordRules.captial){
      alert("PASSWORD MUST CONTAIN ATLEAST ONE CAPITAL CHARATER")
      return 
    }
    if(!passwordRules.small){
      alert("PASSWORD MUST CONTAIN ATLEAST ONE SMALL CHARATER")
      return 
    }
    if(!passwordRules.number){
      alert("PASSWORD MUST CONTAIN ATLEAST ONE DIGIT")
      return 
    }
    if(!passwordRules.special){
      alert("PASSWORD MUST CONTAIN ATLEAST ONE SPECIAL CHARACTER")
      return 
    }

    alert(`Form Submitted Successfully`)
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <h3>USER'S DETAILS</h3>

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
          id="lastName"
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


        <label htmlFor="dob">DATE OF BIRTH</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />


        {/* AGE */}
        <h3>AGE : {formData.age}</h3>


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
          id="mothername"
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


        <label>PASSWORD</label>
        <input 
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="ENTER THE PASSWORD"
        />

        <div>
          <p>
            {passwordRules.length ? "✅" : "❌"}
            {" "} MINIMUM 8 CHRATERS
          </p>
          <p>
            {passwordRules.captial ? "✅" : "❌"}
            {" "} ONE CAPITAL CHARACTER 
          </p>
          <p>
            {passwordRules.small ? "✅" : "❌"}
            {" "} ONE SMALL CHRATER
          </p>
          <p>
            {passwordRules.digit ? "✅" : "❌"}
            {" "} MINIMUM 1 DIGIT
          </p>
          <p>
            {passwordRules.special ? "✅" : "❌"}
            {" "} ONE SPECIAL CHARACTER
          </p>
          
        </div>
        <button type="submit">Submit</button>


        <pre>
          {formData.firstName + " " +
            (formData.middleName ? formData.middleName : " ") +
            " " +
            formData.lastName +
            " " +
            formData.phone}
          <br />

          DOB : {formData.dob}
          <br />

          AGE : {formData.age}
          <br />

          {formData.fathername + " " + formData.fatherphone}
          <br />

          {formData.mothername + " " + formData.motherphone}
        </pre>

      </form>

    </div>
  )
}

export default Formvalidation
