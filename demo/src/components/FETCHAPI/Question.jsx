import { useEffect, useState } from "react";
import {Atom} from "react-loading-indicators"

const Question = () => {
  const [user, setUser] = useState([]);
  const [loading , setloading] = useState(true);
  const [loadingtimer , setloadingtimer] = useState(0);
  useEffect(() => {

    const timer = setInterval(() =>{
      setloadingtimer((x)=> x+1);
    } , 1000);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(()=>{
          setUser(data);
          setloading(false);
        },5000);
      })
      .catch((e) => {
        alert(e);
      });
      return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <div><Atom color="#32cd32" size="medium" text="" textColor="" /></div>
  }
  return(
    <div>
    {
        user.map((u)=>(
          <div key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
            </div>  
        ))
    }
    </div>
  );
};

export default Question;