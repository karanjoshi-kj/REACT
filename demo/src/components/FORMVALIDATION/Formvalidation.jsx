import React, { useState } from 'react'
import './Formvalidation.css'

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

    password: "",
    confirmPassword: ""
  })


  // ================= PASSWORD VALIDATION =================

  const password = formData.password

  const passwordRules = {
    length: password.length >= 8,
    capital: /[A-Z]/.test(password),
    small: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  }


  // Saari password conditions complete hain ya nahi

  const passwordValid =
    passwordRules.length &&
    passwordRules.capital &&
    passwordRules.small &&
    passwordRules.number &&
    passwordRules.special


  // ================= PHONE CHANGE =================

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


  // ================= NORMAL INPUT CHANGE =================

  const handleChange = (e) => {

    const { name, value } = e.target


    // Password aur Confirm Password ko normal validation se alag rakha

    if (
      name !== "dob" &&
      name !== "password" &&
      name !== "confirmPassword" &&
      !/^[A-Za-z ]*$/.test(value)
    ) {
      alert(`${name.toUpperCase()} should only contain characters`)
      return
    }


    // ================= DOB =================

    if (name === "dob") {

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


  // ================= CALCULATE AGE =================

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


    // Days negative

    if (days < 0) {

      months--

      const previousmonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      )

      days += previousmonth.getDate()
    }


    // Months negative

    if (months < 0) {

      years--
      months += 12
    }


    return `${years} years ${months} months and ${days} days`
  }


  // ================= SUBMIT =================

  const handleSubmit = (e) => {

    e.preventDefault()


    // Required fields

    if (
      !formData.firstName ||
      !formData.lastName ||
      formData.phone.length !== 10
    ) {
      alert("All fields in form is Mandatory")
      return
    }


    // First name

    if (formData.firstName.length < 3) {

      alert("FIRST NAME MUST CONTAIN 3 CHARACTERS")
      return
    }


    // Last name

    if (formData.lastName.length < 3) {

      alert("LAST NAME MUST CONTAIN 3 CHARACTERS")
      return
    }


    // Password validation

    if (!passwordValid) {

      alert("Please fulfill all password conditions")
      return
    }


    // Confirm password validation

    if (formData.password !== formData.confirmPassword) {

      alert("Password and Confirm Password should be same")
      return
    }


    alert("Form Submitted Successfully")

    console.log("USER DETAIL'S" , formData)
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <h3>USER'S DETAILS</h3>


        {/* FIRST NAME */}

        <label htmlFor="firstName">
          FIRST NAME
        </label>

        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter Your First Name"
        />


        {/* MIDDLE NAME */}

        <label htmlFor="middleName">
          MIDDLE NAME
        </label>

        <input
          type="text"
          name="middleName"
          id="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Enter Your Middle Name"
        />


        {/* LAST NAME */}

        <label htmlFor="lastName">
          LAST NAME
        </label>

        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Your Last Name"
        />


        {/* PHONE */}

        <label htmlFor="phone">
          PHONE NUMBER
        </label>

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="ENTER THE PHONE NUMBER"
          value={formData.phone}
          onChange={phonehandleChange}
        />


        {/* DOB */}

        <label htmlFor="dob">
          DATE OF BIRTH
        </label>

        <input
          type="date"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
        />


        {/* AGE */}

        <h3>
          AGE : {formData.age}
        </h3>


        {/* ================= FATHER ================= */}

        <h3>
          FATHER'S DETAILS
        </h3>


        <label htmlFor="fathername">
          FATHER NAME
        </label>

        <input
          type="text"
          name="fathername"
          id="fathername"
          value={formData.fathername}
          onChange={handleChange}
          placeholder="ENTER FULL NAME"
        />


        <label htmlFor="fatherphone">
          FATHER PHONE NUMBER
        </label>

        <input
          type="text"
          name="fatherphone"
          id="fatherphone"
          value={formData.fatherphone}
          onChange={phonehandleChange}
          placeholder="ENTER THE PHONE NUMBER"
        />


        {/* ================= MOTHER ================= */}

        <h3>
          MOTHER'S DETAILS
        </h3>


        <label htmlFor="mothername">
          MOTHER NAME
        </label>

        <input
          type="text"
          name="mothername"
          id="mothername"
          value={formData.mothername}
          onChange={handleChange}
          placeholder="ENTER FULL NAME"
        />


        <label htmlFor="motherphone">
          MOTHER PHONE NUMBER
        </label>

        <input
          type="text"
          name="motherphone"
          id="motherphone"
          value={formData.motherphone}
          onChange={phonehandleChange}
          placeholder="ENTER THE PHONE NUMBER"
        />


        {/* ================= PASSWORD ================= */}

        <label htmlFor="password">
          PASSWORD
        </label>

        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />


        {/* PASSWORD CONDITIONS */}

        {!passwordValid && (

          <div>

            <p>
              {passwordRules.length ? "✅" : "❌"}
              {" "}Minimum 8 characters
            </p>

            <p>
              {passwordRules.capital ? "✅" : "❌"}
              {" "}One capital letter
            </p>

            <p>
              {passwordRules.small ? "✅" : "❌"}
              {" "}One small letter
            </p>

            <p>
              {passwordRules.number ? "✅" : "❌"}
              {" "}One number
            </p>

            <p>
              {passwordRules.special ? "✅" : "❌"}
              {" "}One special character
            </p>

          </div>
        )}


        {/* ================= CONFIRM PASSWORD ================= */}

        <label htmlFor="confirmPassword">
          CONFIRM PASSWORD
        </label>

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />


        {/* PASSWORD MATCH */}

        {formData.confirmPassword && (

          <p>
            {formData.password === formData.confirmPassword
              ? "✅ Password Matched"
              : "❌ Password Does Not Match"}
          </p>

        )}


        {/* ================= SUBMIT BUTTON ================= */}

        <button
          type="submit"
          disabled={
            !passwordValid ||
            formData.password !== formData.confirmPassword
          }
        >
          Submit
        </button>


        {/* ================= OUTPUT ================= */}

        <pre>

          {formData.firstName + " " +
            (formData.middleName
              ? formData.middleName
              : " ") +
            " " +
            formData.lastName +
            " " +
            formData.phone}

          <br />

          DOB : {formData.dob}

          <br />

          AGE : {formData.age}

          <br />

          {formData.fathername +
            " " +
            formData.fatherphone}

          <br />

          {formData.mothername +
            " " +
            formData.motherphone}

        </pre>

      </form>

    </div>
  )
}

export default Formvalidation