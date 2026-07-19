import React from 'react'

const Mapfun = () => {
    const studentnames = ['KARAN' , 'BHAWESH' , 'SHUBHAM'];
  return (
    <div>
      <h1>Student Names</h1>
      {/* {   //! YE BRACKET ISLIYE AAYA H KYOKI REACT M DIRECTLY JS NAHI CHLA SAKTE HAI ....
      studentnames.map((name)=>{
        console.log(name);     //? THIS WILL PRINT THE OUTPUT ON THE CONCOLE ..... 
      })
    } */}


    {/* {
        studentnames.map((name)=>{
            return <p>{name}</p>;    //? THIS WILL PRINT THE OUTPUT IN THE SCREEN 
        })
    } */}

    {
        studentnames.map((name)=>(<p>{name}</p>))    //? THIS IS SINGLE LINER & WITHOUT RETURN STATEMENT .....
    }

    </div>
  )
}

export default Mapfun
