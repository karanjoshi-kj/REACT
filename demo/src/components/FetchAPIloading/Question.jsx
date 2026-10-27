import { useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";

const Question = () => {
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtimer, setloadingtimer] = useState(0);

  const [currentpage, setcurrentpage] = useState(1);
  const userPerpage = 10;

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

  const indexoflastuser = currentpage * userPerpage;
  const indexoffirstuser = indexoflastuser - userPerpage;
  const currentuser = user.slice(indexoffirstuser, indexoflastuser);
  const totalpages = Math.ceil(user.length / userPerpage);

  const handlenext = () => {
    if (currentpage < totalpages) {
      setcurrentpage((prev) => prev + 1);
    }
  };

  const handleprev = () => {
    if (currentpage > 1) {
      setcurrentpage((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        <p>Loading time: {loadingtimer} seconds</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Total Users: {user.length}</h2>

      {currentuser.map((u) => (
        <div key={u.login.uuid}>
          <img
            src={u.picture.medium}
            alt="User"
            style={{ borderRadius: "50%" }}
          />
          <div>
            <h3>
              {u.name.title} {u.name.first} {u.name.last}
            </h3>
            <p>
              <strong>Email:</strong> {u.email}
            </p>
            <p>
              <strong>DOB:</strong>{" "}
              {new Date(u.dob.date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
      ))}

      <div>
        <button onClick={handleprev} disabled={currentpage === 1}>
          PREVIOUS
        </button>

        {Array.from({ length: totalpages }, (_, index) => (
          <button key={index} onClick={() => setcurrentpage(index + 1)}>
            {index + 1}
          </button>
        ))}

        <button onClick={handlenext} disabled={currentpage === totalpages}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Question;
