import React , {useState , useEffect} from 'react'

const Randomnumber = () => {
    const [number , setnumber] = useState(null);
    const [history , sethistory] = useState([]);

    const generatenum = () =>{
        const randomnum = Math.floor(Math.random() * 100) + 1 ;
         setnumber(randomnum);
    };
    useEffect(() => {
        if (number !== null) {
            sethistory((prev) =>
            [number , ...prev])
        }
    } , [number]); // [number] : JAB BHI NUMBER CHANGE HOGA TBB USEEFFECT CHALEGA . 
  return (
    <div>
      <h1>LATEST NUMBER : {number}</h1>
      <button onClick={generatenum}>GENERATE NUMBER</button>
      <h2>HISTORY</h2>
      <ul>
        {history.map((num , index) => (
            <li key={index}>{num}</li>
        ))}
      </ul>

      {/* NOTE : MANE USESTATE M NUMBERS KO ARRAY KE FORM M STORE KARWAYA H FRR USME MAP FUNCTION LAGYA H  JO HAR ELEMNET PAR LOOP CHALATA HAI  FRR 2 ARGUMENT PASS KAR DIYA H (num , index)  num -> actual number , index -> position (0 , 1 , 2)*/}
    </div>
  )
}

export default Randomnumber
