import React , {useState} from 'react'

const Todolist = () => {

  const[appdata , updatedata] = useState({task:""});
  const[task , settask] = useState([]);             
  
  const handlechange = (e) => {
    const{name , value} = e.target;

    updatedata({
      ...appdata,
      [name] : value
    });
  };

  const handlesubmit = (e) =>{
    e.preventdefault();
    if(appdata.task === "")
      return;

    settask([...task , appdata.task]);
    updatedata({task : ""});
  };


const deletetask = (index) => {
  const newtask = [...task];  // tasks ka copy banaya
  newtask.splice(index, 1);    // us index ka task delete
  settask(newtask);           // state update
};
  c
  return (
    <div>

      <form onSubmit={handlesubmit}>
        <fieldset>
          <legend>TO-DO LIST</legend>
          <input type='text' name='task' placeholder='ENTER TASK' onChange={handlechange}/>
          <button type='submit'>ADD</button>
        </fieldset>
      </form>

<ul>
      {task.length === 0 ? 
      <p>NO TASK</p> : 
      task.map((item , index)=>(
        <li key={index}>
          {item}
          <button onClick={() => deletetask(index)}>DELETE</button>
        </li>
      ))
      }
</ul>
    </div>
  )
}

export default Todolist
