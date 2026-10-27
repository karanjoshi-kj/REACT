import { use, useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";

const Question = () => {
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtimer, setloadingtimer] = useState(0);

  const [currentpage , setcurrentpage] = useState(1);
  const userPerpage = 10 ;

  useEffect(() => {
    const timer = setInterval(() => {
      setloadingtimer((x) => x + 1);
    }, 1000);

    fetch("https://randomuser.me/api/?results=50")
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

  const indexoflastuser = currentpage * userPerpage ;
  const indexoffirstuser = indexoflastuser - userPerpage;
  const currentuser = user.slice(indexoffirstuser , indexoflastuser);
  const totalpages = Math.ceil(user.length / userPerpage);

  const handlenext = () => {
    if (currentpage < totalpages) {
      setcurrentpage((prev) => prev + 1);
    }
  };

  const handleprev = () => {
    if (currentpage > 1) {
      setcurrentpage((prev) => prev -1) ;
    }
  };
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

      {currentuser.map((u , i) => (
        <div 
          key={i} 
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
      
      <div>
        <button
          onclick={handleprev}
          disabled={currentpage === 1}> PREVIOUS </button>
        <button
          onclick={handlenext}
          disabled={currentpage === totalpages}
          >NEXT</button>
      </div>
    </div>
  );
};

export default Question;