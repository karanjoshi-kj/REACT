import { data } from "react-router-dom";

const propdrilling = () =>{
    return (
        <div>
            <h1>HELLO PROP DEILLING</h1>
            <parent data="karan" />
        </div>
    )
}
export default propdrilling

function parent(data){
    return(
        <>
        <h1>HELLO FROM PARENT COMPONENT</h1>
        <child data={data}/>
        </>
    )
}
function child(data){
    return(
        <>
        <h1>HELLO FROM PARENT COMPONENT</h1>
        <subchild data={data}/>
        </>
    )
}
function child(data){
    return(
        <h1>HELLO FROM PARENT COMPONENT</h1>
    )
}