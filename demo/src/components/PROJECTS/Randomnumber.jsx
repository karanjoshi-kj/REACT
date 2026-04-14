import React , {useState , useEffect} from 'react'

const Randomnumber = () => {
    const [number , setnumber] = useState(null);
    const [history , sethistory] = useState([]);

    const generatenum = () =>{
        const randomnum = Math.floor(Math.random() * 100) + 1 ;
        setnumber(randomnum);
    };
  return (
    <div>
      <button onClick={generatenum}>GENERATE NUMBER</button>
    </div>
  )
}

export default Randomnumber
