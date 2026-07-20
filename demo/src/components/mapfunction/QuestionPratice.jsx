import React from 'react'

const QuestionPratice = () => {

    
    const students = {
        heads : ["ROLL" , "NAME" , "COURSE"],
        values : [{
            rollno : 1 ,
            name : 'karan',
            course : 'b.tech'
        },
        {
            rollno : 2 ,
            name : 'bhawesh',
            course : 'b.pahrma'
        },
        {
            rollno : 3 ,
            name : 'harshit',
            course : 'bca'
        },
        {
            rollno : 100,
            name : 'harshit',
            course : 'bca'
        },
        {
            rollno : 4 ,
            name : 'mohit',
            course : 'mbbs'
        }]
};
  return (
    <div>
      <table border="1" cellPadding="10">
        <thead>
            <tr>
                {students.heads.map((heading , index)=>(
                    <th key={index}>{heading}</th>
                ))}
            </tr>
        </thead>

        {/* <body> */}
            {students.values.map((student , index)=>(
                <tr key={index}>
                    <td>{student.rollno}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>
            ))}
        {/* </body> */}
      </table>
    </div>
  )
}

export default QuestionPratice
