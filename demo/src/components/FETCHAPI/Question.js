import { useEffect, useState } from "react";

const GetData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  
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

export default GetData;