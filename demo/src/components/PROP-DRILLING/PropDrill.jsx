const PropDrilling = () => {
    return (
        <div>
            <h1>HELLO PROP DRILLING</h1>
            <Parent data="karan" />
        </div>
    );
};

export default PropDrilling;

function Parent({ data }) {
    return (
        <>
            <h1>HELLO FROM PARENT COMPONENT</h1>
            <Child data={data} />
        </>
    );
}

function Child({ data }) {
    return (
        <>
            <h1>HELLO FROM CHILD COMPONENT</h1>
            <SubChild data={data} />
        </>
    );
}

// Created the missing 'SubChild' component to receive the final prop
function SubChild({ data }) {
    return (
        <h1>HELLO FROM SUBCHILD COMPONENT: {data}</h1>
    );
}