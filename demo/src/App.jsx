import React from 'react';
import { UserContext, userdata } from './components/contextapi/Usercontext';
import User from './components/contextapi/User';


const App = () => {
  return (
   <UserContext.Provider value={userdata}>
    <User/>
   </UserContext.Provider>
  );
}
export default App 