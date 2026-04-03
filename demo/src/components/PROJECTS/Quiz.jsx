import React, { useState } from "react";
import data from "./Questions.json";

const Quiz = () => {

  const [index, setindex] = useState(0);
  const [select, setselect] = useState("");
  const [score, setscore] = useState(0);

  const nextques = () => {

    if (select === "") {
      alert("PLZZ SELECT AN OPTION");
      return;
    }

    if (select === data.Questions[index].answer) {
      setscore(score + 1);
    }

    if (index < data.Questions.length - 1) {
      setindex(index + 1);
      setselect("");
    } 
    else {
      alert(
        `YOUR SCORE : ${
          score + (select === data.Questions[index].answer ? 1 : 0)
        }`
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

      <h2>{data.Questions[index].question}</h2>

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