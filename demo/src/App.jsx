import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import HelmetComponent from './components/Helmets/HelmetComponent'
import Favicon from './components/Helmets/Favicon'
// import About from './components/Helmets/About'
// import Services from './components/Helmets/Services'
// import Usemeta from './components/Helmets/Usemeta'
// import Vision from './components/Helmets/Vision'
// import Contact from './components/Helmets/Contact'

const App = () => {
  return (
       <HelmetProvider>
      <Router>
        <Helmet>
          <title>Default- Coaching App</title>
          <meta name="description" content="Coaching application" />
        </Helmet>
        <nav>
          <Link to="/favicon">Favicon</Link><br/>
          {/* <Link to="/usemeta">Meta</Link><br/> */}
          {/* <Link to="/">Home<HelmetComponent /></ Link><br/> */}
          {/* <Link to="/contact">Contact</Link><br/>             */}
          {/* <Link to="/about">About</Link><br/>             */}
          {/* <Link to="/about/vision">Vision</Link><br/>             */}
          {/* <Link to="/services">Services</Link><br/>             */}
          {/* <Link to="https://nlp.nexterp.in/nlp/nlp/v1/home/collaboration-dashboard">About | ON WEBSITE </Link><br/> */}
          {/* <a href="https://nlp.nexterp.in/nlp/nlp/v1/home/collaboration-dashboard" target="_blank" rel="noopener noreferrer">External Link  |ERP  </a> */}
        </nav>
        <Routes>
          {/* <Route path="/" element={<HelmetComponent />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/about/vision" element={<Vision />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="*" element={<Error404 />} /> */}
          {/* <Route path="/usemeta" element={<Usemeta />} /> */}
          <Route path="/favicon" element={<Favicon title="My App" description="My app description" keyword="my, app, keywords" favicon="https://cdn-icons-png.flaticon.com/512/1041/1041888.png" />} />
        </Routes>
      </Router>
    </HelmetProvider>

  )
}

export default App