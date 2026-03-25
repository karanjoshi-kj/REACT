import React from "react";
// import MutipleProps from "./MutipleProps";

const Form = () => {
    const data = (e) => {
        e.preventDefault();
        const userData = new FormData(e.target);
        const userdataentries = Object.fromEntries(userData.entries());
        console.log("User Data:", userdataentries);
        const userJSONData = JSON.stringify(userdataentries);
        console.log(userJSONData)
        // { userJSONData.map((index, student) => (<MutipleProps key={index} studentData={student} />)) }
    };

    return (
        <div className="container">
            <h2>Form</h2>
            <form onSubmit={data}>
                <input type="text" id="Name" name="name" placeholder="ENTER NAME" required />
                <br></br>
                <input type="email" id="Email" name="email" placeholder="ENTER EMAIL" />
                <br></br>
                <input type="number" id="Age" name="number" placeholder="ENTER AGE" />
                <br></br>

                <select id="Gender" name="gender">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <br></br>

                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

export default Form;