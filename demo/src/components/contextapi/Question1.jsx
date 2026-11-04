import React, { useContext } from 'react'
import { QuestionContext } from './QuestionContext';

const Question1 = () => {
    const usedata = useContext(QuestionContext)
  return (
    <div>
      {usedata}
    </div>
  )
}

export default Question1
