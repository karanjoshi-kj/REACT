function Component1(){
    let name = "KARAN" ;
    return <Component2 name={name} />;
}
const Component2 = (props) =>{
    return <Component3 name={props.name}/>
};
function Component3({name}){
    return <Component4 name={name}/>
};
function Component4(props){
    return (
        <>
        <h2>NAME : {props.name}</h2>
    </>
    )
};
export default Component1;