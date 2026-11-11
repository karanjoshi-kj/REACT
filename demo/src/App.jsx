import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dynamicrouting from './components/ROUTES/Dynamicrouting';
import Userprofile from './components/ROUTES/Userprofile'; // Agar alag file hai toh import kar, nahi toh niche wale code ki tarah

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Yahan element={<Dynamicrouting />} hoga (JSX tag format me) */}
        <Route path="/" element={<Dynamicrouting />} />
        
        {/* Yeh dynamic route hai user profile ke liye */}
        <Route path="/user/:id" element={<Userprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;