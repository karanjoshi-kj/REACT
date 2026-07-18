import React from 'react';
import Question from './components/navbar1/Question';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // <-- BrowserRouter add kiya
import Aboutus from './components/pages/Aboutus';
import Services from './components/Common/Pagenotfound';
import Contact from './components/Common/Underconstruction';
const App = () => {
  return (
    <BrowserRouter> {/* <-- Yahan start kiya */}
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter> 
  );
};

export default App;