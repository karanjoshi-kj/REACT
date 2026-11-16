import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/ROUTES/About';
// import PageNot from './components/ROUTES/PageNot';
// import User1 from './components/ROUTES/User1';
// import Question from './components/ROUTES/Question';
// import Usesearchparams from './components/ROUTES/Usesearchparams';
// import Usesearchquestion from './components/ROUTES/Usesearchquestion';
// import Question3 from './components/ROUTES/Question3';
import Question4 from './components/ROUTES/Question4';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/datafetch" element={<Usesearchquestion/>} /> */}
        <Route path="/checkdetils" element={<Question4/>} />
        {/* <Route path="/marksfetch" element={<Question3/>} /> */}
        {/* <Route path="/usesearchparams" element={<Usesearchparams />} /> */}
        // {/* <Route path="/question/:id" element={<Question />}/> */}
        {/* <Route path="/user/:usercode/:username" element={<User1 />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNot />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;