import React, { useState } from "react";

const Todolist = () => {

  const [appdata, updatedata] = useState({
    task: "",
    description: ""
  });

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

    const newTask = {
      task: appdata.task,
      description: appdata.description || null,
      datetime: new Date().toLocaleString()
    };

    settask([...task, newTask]);

    updatedata({
      task: "",
      description: ""
    });
  };

  const deletetask = (index) => {
    let newtask = [];

    for (let i = 0; i < task.length; i++) {
      if (i !== index) {
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

          <input
            type="text"
            name="description"
            placeholder="ENTER DESCRIPTION"
            value={appdata.description}
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

              <p><b>Task:</b> {item.task}</p>

              <p>
                <b>Description:</b>{" "}
                {item.description === null ? "null" : item.description}
              </p>

              <p><b>Added:</b> {item.datetime}</p>

              <button onClick={() => deletetask(index)}>
                DELETE
              </button>

              <hr />

            </li>
          ))
        )}
      </ul>

    </div>
  );
};

export default Todolist;