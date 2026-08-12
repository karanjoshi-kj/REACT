// import React from 'react'
import { useState } from "react";
import data from "./Data.json";

const Country = () => {
  const [country, setCountry] = useState("");
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
      <select>
        <option value="">Select State</option>
      </select>
      <h3>District</h3>
      <select>
        <option value="">Select District</option>
      </select>
      <h1>{country}</h1>
    </div>
  );
};

export default Country;