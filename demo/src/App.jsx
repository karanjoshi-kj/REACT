import React from 'react';
import { UserContext, userdata } from './components/contextapi/Usercontext';
import User from './components/contextapi/User';
import Component from './components/contextapi/Component';
import Navbar from './components/contextapi/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
   <UserContext.Provider value={userdata}>
    <User/>
    <Component/>
   </UserContext.Provider>
   </>
  );
}
export default App 