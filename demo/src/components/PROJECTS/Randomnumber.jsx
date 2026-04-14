import React , {useState , useEffect} from 'react'

const Randomnumber = () => {
    const [number , setnumber] = useState(null);
    const [history , sethistory] = useState([]);

    const generatenum = () =>{
        const randomnum = Math.floor(Math.random() * 1000) + 1 ;
    }
  return (
    <div>
      <button>GENERATE NUMBER</button>
    </div>
  )
}

export default Randomnumber
