
//! SYNTAX
//! useState: data to ko store with update values
//! useEffect : mainly used to resolve the side effects in the code with various parameters


//? useEffect(() => {

//? }, dependencies)


import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);



    function helloPrint() {
        console.log(" Print Hello");
    }
    useEffect(() => {
        helloPrint();
    }, [])

    // helloPrint();  independent in nature
    return (
        <div>
            {/* Hello */}
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
            <button onClick={() => setTimer(timer + 3)}>Timer{timer}</button>
        </div >
    )
}

export default UseEffectDemo;


// useState: data to ko store with update values
// useEffect : mainly used to resolve the side effects in the code with various parameters


// useEffect(() => {

// }, dependencies)