import React , {useState , useEffect} from 'react'

const Randomnumber = () => {
    const [number , setnumber] = useState(null);
    const [history , sethistory] = useState([]);
  return (
    <div>
      <button>GENERATE NUMBER</button>
    </div>
  )
}

export default Randomnumber
