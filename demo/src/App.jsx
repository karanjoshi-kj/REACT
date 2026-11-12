import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/ROUTES/Navbar'; 
import About from './components/ROUTES/About';
import PageNot from './components/ROUTES/PageNot';
import User1 from './components/ROUTES/User1';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/user/:usercode" element={<User1 />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;