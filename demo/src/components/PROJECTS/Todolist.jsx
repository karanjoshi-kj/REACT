import React, { useState } from "react";

const Todolist = () => {

  const [appdata, updatedata] = useState({ task: "" });
  const [task, settask] = useState([]);

  const handlechange = (e) => {
    const { name, value } = e.target;

    updatedata({
      ...appdata,
      [name]: value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (appdata.task === "") return;

    settask([...task, appdata.task]);
    updatedata({ task: "" });
  };

  const deletetask = (index) => {   // index vo hai jo delete karna h 
    let newtask = [];

    for (let i = 0; i < task.length; i++) {
      if (i !== index) {   // index ke alawa baaki sab task array m push kar diye . 
        newtask.push(task[i]);
      }
    }

    settask(newtask);
  };

  return (
    <div>

      <form onSubmit={handlesubmit}>
        <fieldset>
          <legend>TO-DO LIST</legend>

          <input
            type="text"
            name="task"
            placeholder="ENTER TASK"
            value={appdata.task}
            onChange={handlechange}
          />

          <button type="submit">ADD</button>

        </fieldset>
      </form>

      <ul>
        {task.length === 0 ? (
          <p>NO TASK</p>
        ) : (
          task.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deletetask(index)}>
                DELETE
              </button>
            </li>
          ))
        )}
      </ul>

    </div>
  );
};

export default Todolist;