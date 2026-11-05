import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContext';

const Question1 = () => {

    const usedata = useContext(QuestionContext);

    return (
        <div>
            {usedata.quotesdata.quotes.map((e) => {
                return (
                    <div key={e.id}>
                        <p>{e.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Question1;