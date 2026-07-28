import React from 'react'

const Input1 = ({search , setsearch}) => {
  return (
    <input 
    type="text"
    placeholder="PRODUCT"
    value={search}
    onChange={(e) => setsearch(e.target.value)}
    />
  );
};

export default Input1
