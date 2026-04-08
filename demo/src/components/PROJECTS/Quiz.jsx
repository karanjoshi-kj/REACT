import React, { useState } from "react";
import data from "./Questions.json";

const Quiz = () => {

  const [index, setindex] = useState(0);
  const [select, setselect] = useState("");
  const [score, setscore] = useState(0);
  const [answers, setanswers] = useState([]);

  const nextques = () => {

    if (select === "") {
      alert("PLZZ SELECT AN OPTION");
      return;
    }

    let correct = select === data.Questions[index].answer;

    if (correct) {
      setscore(score + 1);
    }

    // store result
    const newAnswers = [...answers];
    newAnswers[index] = correct;
    setanswers(newAnswers);

    if (index < data.Questions.length - 1) {
      setindex(index + 1);
      setselect("");
    } 
    else {

      const correctCount = correct ? score + 1 : score;
      const wrongCount = data.Questions.length - correctCount;

      alert(
        `CORRECT : ${correctCount}\nWRONG : ${wrongCount}\nTOTAL : ${data.Questions.length}`
      );
    }

  };  

  const prevques = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };

  return (
    <div>

      <h2>
        {data.Questions[index].question}

        {answers[index] === true && " ✔️"}
        {answers[index] === false && " ❌"}
      </h2>


      {data.Questions[index].options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name={`option-${index}`}
            value={opt}
            checked={select === opt}
            onChange={() => setselect(opt)}
          />
          <span>{opt}</span>
        </div>
      ))}

      <br/>

      <button onClick={prevques}>PREVIOUS</button>
      <button onClick={nextques}>NEXT</button>

    </div>
  );
};

export default Quiz;