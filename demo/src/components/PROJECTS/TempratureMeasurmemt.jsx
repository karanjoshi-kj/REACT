import React, { useState, useEffect } from "react";

function TempratureMeasurmemt() {

  const [temp, setTemp] = useState("");
  const [message, setMessage] = useState("");
  const [greet, setGreet] = useState("");
  const [time, setTime] = useState(new Date());

  // Clock update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());   // machine ka current time
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Temperature + Greeting logic
  useEffect(() => {

    
      if (temp > 30) {
        setMessage("Hot");
      }
      else if (temp < 10) {
        setMessage("Cold");
      }
      else {
        setMessage("Normal");
      }

    const hour = new Date().getHours();

    if (hour < 12) {
      setGreet("Good Morning");
    }
    else if (hour < 17) {
      setGreet("Good Afternoon");
    }
    else {
      setGreet("Good Evening");
    }

  }, [temp]);

  return (
<div>
      <h2>{greet}</h2>

      <h3>Current Time: {time.toLocaleTimeString()}</h3>

      <input
        type="number"
        placeholder="Enter Temperature"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <h2>{message}</h2>
</div>
  );
}

export default TempratureMeasurmemt;