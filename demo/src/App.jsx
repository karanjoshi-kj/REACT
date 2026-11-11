import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dynamicrouting from './components/ROUTES/Dynamicrouting';
import Userprofile from './components/ROUTES/Userprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dynamicrouting />} />
        
        <Route path="/user/:id" element={<Userprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;