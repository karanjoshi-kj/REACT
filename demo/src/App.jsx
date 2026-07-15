import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import HelmetComponent from './components/Helmets/HelmetComponent'
import Contact from './components/Helmets/Contact'
const App = () => {
  return (
       <HelmetProvider>
      <Router>
        <Helmet>
          <title>Default- Coaching App</title>
          <meta name="description" content="Coaching application" />
        </Helmet>
        <nav>
          <Link to="/">Home<HelmetComponent /></ Link><br/>            
          <Link to="/contact">Contact</Link><br/>            
          <Link to="https://nlp.nexterp.in/nlp/nlp/v1/home/collaboration-dashboard">About | ON WEBSITE </Link><br/>
          <a href="https://nlp.nexterp.in/nlp/nlp/v1/home/collaboration-dashboard" target="_blank" rel="noopener noreferrer">External Link  |ERP  </a>
        </nav>
        <Routes>
          <Route path="/" element={<HelmetComponent />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>

  )
}

export default App