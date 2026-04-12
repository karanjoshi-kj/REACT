import React, { useState, useEffect } from "react";
import data from "./Questions.json";

const Quiz = () => {

  const questiontiming = 5;
  const globaltime = 30;

  const [index, setindex] = useState(0);
  const [select, setselect] = useState("");
  const [score, setscore] = useState(0);
  const [answer, setanswer] = useState([]);

  const [timing, setTiming] = useState(questiontiming);
  const [globaltimer, setglobaltimer] = useState(globaltime);

  const nextques = () => {

    let correct = select === data.Questions[index].answer;

    if (correct) {
      setscore(score + 1);
    }

    const newanswer = [...answer];
    newanswer[index] = correct;
    setanswer(newanswer);

    if (index < data.Questions.length - 1) {
      setindex(index + 1);
      setselect("");
    } 
    else {
      alert(`YOUR SCORE : ${score + (correct ? 1 : 0)} / ${data.Questions.length}`);
    }
  };

  const prevques = () => {
    if (index > 0) {
      setindex(index - 1);
      setselect("");
    }
  };



  // LOCAL TIMER
  useEffect(() => {

    setTiming(questiontiming);

    const interval = setInterval(() => {

      setTiming((time) => {

        if (time === 0) {
          nextques();
          return 0;
        }

        return time - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, [index]);



  // GLOBAL TIMER
  useEffect(() => {

    const globalInterval = setInterval(() => {

      setglobaltimer((time) => {

        if (time === 0) {

          clearInterval(globalInterval);

          alert(`TIME IS UP \nYOUR SCORE : ${score} / ${data.Questions.length}`);

          return 0;

        }

        return time - 1;

      });

    }, 1000);

    return () => clearInterval(globalInterval);

  }, []);



  return (
    <div>

      <h2>Global Time Left : {globaltimer}</h2>
      <h3>Question Time Left : {timing}</h3>

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

      <br />

      <button onClick={prevques}>PREVIOUS</button>
      <button onClick={nextques}>NEXT</button>

    </div>
  );
};

export default Quiz;