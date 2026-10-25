import { useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";

const Question = () => {
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtimer, setloadingtimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setloadingtimer((x) => x + 1);
    }, 1000);

    fetch("https://randomuser.me/api/?results=500")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUser(data.results); 
          setloading(false);
        }, 5000);
      })
      .catch((e) => {
        alert(e);
        setloading(false);
      });

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        <p>Loading time: {loadingtimer} seconds</p> 
      </div>
    );
  }

  return (
    <div>
      {user.map((u) => (
        <div key={u.login.uuid}> 
          <h3>{u.name.first} {u.name.last}</h3> 
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;