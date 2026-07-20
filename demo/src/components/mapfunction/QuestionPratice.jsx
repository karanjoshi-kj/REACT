import React from 'react'

const QuestionPratice = () => {

    const upperheadings = [
        "ROLLNO.",
        "NAME",
        "COURSE"
    ];
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
                {upperheadings.map((heading , index)=>(
                    <th key={index}>{heading}</th>
                ))}
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
