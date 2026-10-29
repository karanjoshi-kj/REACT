import { useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";

const Question = () => {
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtimer, setloadingtimer] = useState(0);
  const [search, setsearch] = useState("");

  const [currentpage, setcurrentpage] = useState(1);
  const userPerpage = 10;

  const [debouncedsearch, setdebouncedsearch] = useState("");

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

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedsearch(search);
      setcurrentpage(1);
      callingapi();
    }, 10);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteruser = user.filter((u) => {
    const fullName = `${u.name.first} ${u.name.last}`;
    return fullName.toLowerCase().includes(debouncedsearch.toLowerCase());
  });

  const indexoflastuser = currentpage * userPerpage;
  const indexoffirstuser = indexoflastuser - userPerpage;
  const currentuser = filteruser.slice(indexoffirstuser, indexoflastuser);
  const totalpages = Math.ceil(filteruser.length / userPerpage);

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

  const callingapi = () => {
    console.log("CALLING API");
  };
  const handlechange = (e) => {
    setsearch(e.target.value);

    setcurrentpage(1);
  };

  return (
    <div>
      <h1>SEARCH USERS</h1>
      <input
        type="text"
        placeholder="SEARCH BY NAME.."
        value={search}
        onChange={handlechange}
      />

      <h2>Total Users: {filteruser.length}</h2>

      {currentuser.length === 0 ? (
        <p>No users found.</p>
      ) : (
        currentuser.map((u) => (
          <div key={u.login.uuid} style={{ margin: "20px 0" }}>
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
        ))
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleprev} disabled={currentpage === 1}>
          PREVIOUS
        </button>

        {Array.from({ length: totalpages }, (_, index) => (
          <button
            key={index}
            onClick={() => setcurrentpage(index + 1)}
            style={{
              fontWeight: currentpage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handlenext}
          disabled={currentpage === totalpages || totalpages === 0}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Question;
