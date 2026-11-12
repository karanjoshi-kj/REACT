import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/ROUTES/About';
// import PageNot from './components/ROUTES/PageNot';
// import User1 from './components/ROUTES/User1';
import Question from './components/ROUTES/Question';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/question/:id" element={<Question />}/>
        {/* <Route path="/user/:usercode/:username" element={<User1 />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNot />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;