import React , {useState} from 'react'

const FormuseState = () => {

  const [formData, setFormData] = useState({ StudentName: "", StudentDob: "", Studentcourse: "", Studentemail: "", Studentnumber: ""});
    const [userData, setUserData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,   // PURANE DATA KO ESA HEE RAKHEGII AUR NYII BHI RAKHEGGI 
            [name]: value
        });
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
    }
  return (
     <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Student Registration Form: </legend>

                    <input type="text" name="StudentName" id="Stname" placeholder='Enter Student Name' onChange={handleChange} /><br />

                    <input type="date" name="StudentDob" id="Stdob" placeholder='Enter DOB' onChange={handleChange} /><br />

                    <input type="text" name="Studentcourse" id="Stcourse" placeholder='Enter Course' onChange={handleChange} /><br />

                    <input type="email" name="Studentemail" id="Stemail" placeholder='Enter Email' onChange={handleChange} /><br />

                    <input type="number" name="Studentnumber" id="Stnumber" placeholder='Enter Phone' onChange={handleChange} /><br />

                    <button type='submit'>SUBMIT FORM</button>
                </fieldset>
            </form>

            {   userData && (<div><h1>Student Data </h1>
                <p>Student Name: {userData.StudentName}</p>
                <p>Student DOB: {userData.StudentDob}</p>
                <p>Student Course {userData.Studentcourse}</p>
                <p>Student Email {userData.Studentemail}</p>
                <p>Student Number {userData.Studentnumber}</p></div>)}
        </div>
  )
}


export default FormuseState
