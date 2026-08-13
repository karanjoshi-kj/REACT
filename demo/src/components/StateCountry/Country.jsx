// import React from 'react'
import { useState } from "react";
import data from "./Data.json";

const Country = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
 
  
  // const [district, setDistrict] = useState("");
  return (
    <div>
      <h3>Country</h3>
      <select value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}>
        <option
          
        >
          Select Country
        </option>
        {Object.keys(data).map((countryName) => (
          <option key={countryName} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>




      <h3>State</h3>
      <select disabled={!country} value={state}
          onChange={(e) => {
            setState(e.target.value);
          }} >

        <option value="">Select State</option>


        {                  //undefined 
          Object.keys(data[country]||{}).map((stateName)=>(
              <option key={stateName} value={stateName}>
            {stateName}
          </option>
          ))}
        
      </select>





      <h3>District</h3>
      <select disabled={!state}>
        <option value="">Select District</option>
      </select>
      <h1>{country}</h1>
      <h2>{state}</h2>
    </div>
  );
};

export default Country;