import React from 'react';
import Question from './components/navbar1/Question';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // <-- BrowserRouter add kiya
import Aboutus from './components/pages/Aboutus';

const App = () => {
  return (
    <BrowserRouter> {/* <-- Yahan start kiya */}
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;