import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/ROUTES/About';
// import PageNot from './components/ROUTES/PageNot';
// import User1 from './components/ROUTES/User1';
// import Question from './components/ROUTES/Question';
// import Usesearchparams from './components/ROUTES/Usesearchparams';
// import Usesearchquestion from './components/ROUTES/Usesearchquestion';
// import Question3 from './components/ROUTES/Question3';
// import Question4 from './components/ROUTES/Question4';
// import Setvaluesonhook from './components/ROUTES/Setvaluesonhook';
// import Question5 from './components/ROUTES/Question5';
// import Question6 from './components/ROUTES/Miniproject';
// import Login from './components/NESTEDROUTES/Login';
// import Dashboard from './components/NESTEDROUTES/Dashboard';
// import Admin from './components/NESTEDROUTES/Admin';
// import Signin from './components/NESTEDROUTES/Signin';
// import Userprofile from './components/NESTEDROUTES/Userprofile';
import Adminlayout from './components/NESTEDROUTES/Adminlayout';
import Studentdetails from './components/NESTEDROUTES/Studentdetails';
import Courses from './components/NESTEDROUTES/Courses';
import Dashboard1 from './components/NESTEDROUTES/Dashboard1';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/datafetch" element={<Usesearchquestion/>} /> */}

        //? NESTED ROUTING....
        {/* CHILD OF ADMIN ROUTES */}
        {/* <Route path="/admin" element={<Admin/>}>
            <Route path="userlogin" element={<Login/>} />
            <Route path="userdashboard" element={<Dashboard/>} />
            <Route path="sign" element={<Signin/>} />
            <Route path="profile" element={<Userprofile/>} />
        </Route> */}

        <Route>
            <Route path="/admin" element={<Adminlayout/>} />
                <Route path="studentdashboard" element={< Dashboard1/>}/>
                <Route path="userdetails" element={< Studentdetails/>}/>
                <Route path="coursedetails" element={< Courses/>}/>
        </Route>
        {/* <Route path="/checkdetils" element={<Question4/>} /> */}
        {/* <Route path="/setvalues" element={<Setvaluesonhook/>} /> */}
        {/* <Route path="/productdetails" element={<Question6/>} /> */}
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