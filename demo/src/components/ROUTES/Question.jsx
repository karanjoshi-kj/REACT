import React from 'react'
import Dummydata from './Dummydata.json'
import { useParams } from 'react-router-dom';

const Question = () => {
    const {id} = useParams();
    
  return (
    <div>
        <h1>{id}</h1>       
    </div>
  )
}

export default Question
