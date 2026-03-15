import React from 'react'

const nav = (props) => {
  return (
    <div>
      <h1>Hello{props.name}</h1>
    </div>
  )
}

export default nav


/*
PROPS-->Properties
props are the values which are passed form the parent component to the child component

Properties of Props
1. It makes the compponent resuable
2. Props are only readonly in the child component
3. We cannot updated  the values of the props in the child component
4. We can pass arrays, functions, components, string values in props

*/

// APP(Parent)-- > Data Chatching(CHILD-- > NAV)