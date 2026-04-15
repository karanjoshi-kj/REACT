import React , {useState , useEffect} from 'react'

const TempratureMeasurmemt = () => {
    const[temp , settemp] = useState("");
    const[msg , setmsg] = useState("");
    const[wish , setwish] = useState("");

    useEffect(() => {
        if (temp > 30) {
            setmsg("HOT");
        }
        else if(temp < 10){
            setmsg("COLD");
        }
        else{
            setmsg("NORMAL");
        }

        const hour = new Date().getHours();
        if (hour < 12) {
            setwish("GOOD MORNING");
        }
        else if(hour < 17){
            setwish("GOOD AFTERNOON");
        }
        else{
            setwish("GOOD EVENING");
        }
    } , [temp])
  return (
    <div>
      <h2>{wish}</h2>
      <input type='number' placeholder='ENTER TEMPRATURE' value={temp} onChange={(e) => settemp(e.target.value)} />
      <h3>{msg}</h3>
    </div>
  )
}

export default TempratureMeasurmemt
