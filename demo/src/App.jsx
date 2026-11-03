import React from 'react';
import { userdata } from './components/contextapi/Usercontext';
import User from './components/contextapi/User';


export default function App() {
  return (
   <Usercontext.Provider value={userdata}> 
   <User/>
   </Usercontext.Provider>
  );
}