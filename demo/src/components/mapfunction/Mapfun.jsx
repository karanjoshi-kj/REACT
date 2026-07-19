import React from 'react'

const Mapfun = () => {
    const studentnames = ['KARAN' , 'BHAWESH' , 'SHUBHAM'];
  return (
    <div>
      <h1>Student Names</h1>
      {   //! YE BRACKET ISLIYE AAYA H KYOKI REACT M DIRECTLY JS NAHI CHLA SAKTE HAI ....
      studentnames.map((name)=>{
        console.log(name);     //? THIS WILL PRINT THE OUTPUT ON THE CONCOLE ..... 
      })
    }
    </div>
  )
}

export default Mapfun
