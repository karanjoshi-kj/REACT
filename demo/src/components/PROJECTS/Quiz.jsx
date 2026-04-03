import React, { useState } from "react";
import data from "./Questions.json";

const Quiz = () => {
  const [index, setindex] = useState(0);
  const [select, setselect] = useState("");
  const [score, setscore] = useState(0);
  const nextques = () => {
    if (setselect === "") {
      alert("PLZZ SELECT AN OPTION");
      return;
    }

    if (setselect === data.Questions[index].answer) {
      setscore(score + 1);
    }

    if (index < data.Questions.length - 1) {
      setindex(index + 1);
      setselect("");
    } else {
      alert(
        `YOUR SCORE : ${score + select === data.Questions[index].answer ? 1 : 0}`,
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
      <h1>{data.Questions[index].question}</h1>
      {data.Questions[index].options.map((opt, i) => (
        // <p key={i}>{opt}</p>
        <div>
          <input type="radio" key={i} name="answersbutton" value={opt} />
          <span>{opt}</span>
        </div>
      ))}
      <button onClick={nextques}>NEXT PROBLEM</button>
      <button onClick={prevques}>PREVIOUS PROBLEM</button>
    </div>
  );
};

export default Quiz;
