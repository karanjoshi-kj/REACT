import React from 'react'

const QuestionPratice = () => {
    const students = [
        {
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
            rollno : 4 ,
            name : 'mohit',
            course : 'mbbs'
        },
    ];
  return (
    <div>
      <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>rollno</th>
                <th>name</th>
                <th>course</th>
            </tr>
        </thead>

        {/* <body> */}
            {students.map((student , index)=>(
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
