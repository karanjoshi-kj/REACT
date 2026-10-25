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
      <div style={{ textAlign: "center" }}>
        <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        <p>Loading time: {loadingtimer} seconds</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Total Users: {user.length}</h2>
      {user.map((u) => (
        <div 
          key={u.login.uuid} 
        >
          <img 
            src={u.picture.medium} 
            alt="User"            
          />

          <h3>{u.name.title} {u.name.first} {u.name.last}</h3>

          <p><strong>Email:</strong> {u.email}</p>

          <p><strong>DOB:</strong> { new Date(u.dob.date).toLocaleDateString('en-US')}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;