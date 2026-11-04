import React from 'react';
// import { UserContext, userdata } from './components/contextapi/Usercontext';
// import User from './components/contextapi/User';
// import Component from './components/contextapi/Component';
// import Navbar from './components/contextapi/Navbar';
import { QuestionContext } from './components/contextapi/QuestionContext';
import Question1 from './components/contextapi/Question1';

import Question from '../src/components/contextapi/Question.json'
const App = () => {
  return (
//     <>
//     <Navbar/>
//    <UserContext.Provider value={userdata}>
//     <User/>
//     <Component/>
//    </UserContext.Provider>
//  </>

   <QuestionContext.Provider value={{Question}}>
    <Question1/>
   </QuestionContext.Provider>
  );
}
export default App 