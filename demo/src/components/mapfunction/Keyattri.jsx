import React from 'react'

const Keyattri = () => {
    const studentnames = [
        {
            "id":1,
            "name":'karan'
        },
        {
            "id":2,
            "name":'Bhawesh'
        },
        {
            "id":1,
            "name":'Ram'
        }
    ];
  return (
    <div>
      <h2>STUDENT NAMES</h2>
      {studentnames.map((parameter)=>{
        <p key={parameter.id}>{parameter.id}{parameter.name}</p>
      })}
    </div>
  )
}

export default Keyattri
