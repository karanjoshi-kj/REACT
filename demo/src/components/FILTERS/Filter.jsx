//? FILTER RETURNS THE OUTPUT IN THE FORM OF ARRAY .

import React from 'react'

const Filter = () => {
    const numbers = [1,2,3,4,5,6];
    const evenno = numbers.filter((num)=> num%2==0);
    // console.log(evenno);
    
  return (
    <div>
      <h1>EVEN NUMBERS{evenno}</h1>
    </div>
  )
}

export default Filter
