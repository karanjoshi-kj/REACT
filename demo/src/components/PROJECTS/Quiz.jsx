import React , {useState} from 'react';
import data from "./Questions.json";

const Quiz = () => {
    const[index , setindex] = useState(0);
    const nextques = () =>{
        if (index < data.Questions.length) {
            setindex(index + 1)
        }
    }

    const prevques = () => {
      if (index > 0) {
        setindex(index-1)
      }  
    }
  return (
    <div>
      <h1>{data.Questions[index].question}</h1>
      {
        data.Questions[index].options.map((opt , i)=>(
            // <p key={i}>{opt}</p>
            <div>
            <input type='radio' key={i} name='answersbutton' value={opt} /> 
            <span>{opt}</span>
            </div>
        ))
      }
      <button onClick={nextques}>NEXT PROBLEM</button>
      <button onClick={prevques}>PREVIOUS PROBLEM</button>
      
    </div>
  )
}

export default Quiz
