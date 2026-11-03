import React from 'react';
import { UserContext , userdata } from './components/contextapi/Usercontext';
import User from './components/contextapi/User';


const App = () => {
  return (
   <Usercontext.Provider value={userdata}> 
   <User/>
   </Usercontext.Provider>
  );
}
export default App 