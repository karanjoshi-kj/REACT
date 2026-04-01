import React , {useState} from 'react';
import data from "./Questions.json";

const Quiz = () => {
    const[index , setindex] = useState(0);
    const nextques = () =>{
        if (index < data.Questions.length) {
            setindex(index + 1)
        }
    }
  return (
    <div>
      <h1>{data.Questions[index].question}</h1>
      {
        data.question[index].options.map((opt , i)=>(
            <p key={i}>{opt}</p>
        ))
      }
      <button onClick={nextques}>NEXT PROBLEM</button>
    </div>
  )
}

export default Quiz
