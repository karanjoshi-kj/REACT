import React from 'react'

const Filtercard = () => {
    const students = [
        {
        id : 1,
        name : "karan",
        age : "21",
        course : "btech"
    },
        {
        id : 1,
        name : "karan",
        age : "21",
        course : "btech"
    },
        {
        id : 2,
        name : "ram",
        age : "31",
        course : "bca"
    },
        {
        id : 3,
        name : "shayam",
        age : "40",
        course : "mtech"
    },
        {
        id : 4,
        name : "kishan",
        age : "51",
        course : "job"
    },
        {
        id : 5,
        name : "harsh",
        age : "11",
        course : "mca"
    },
];

const filterstudent = students.filter((student) => student.age > 30);
  return (
    <div>
      <h1>STUDENT CARD</h1>
      {filterstudent.map((student) => (
        <div>
        key={student.id}
            <h1>{student.name}</h1>
            <h1>{student.course}</h1>
            <h1>{student.name}</h1>
      </div>
      ))}
    </div>
  );
}

export default Filtercard
