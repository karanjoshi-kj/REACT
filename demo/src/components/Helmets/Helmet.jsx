import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetComponent = () => {
  return (
    <>
      <HelmetProvider>
        <title>My React App</title>
        <nav>
            <Link To="/">Home</Link>
            <Link To="https://karanjoshi-ten.vercel.app/">My portfolio</Link>
            <a href="https://karanjoshi-ten.vercel.app/" target="_blank">Portfolio opn the next page</a>
        </nav>

        <Routes>
            <Routes path="/" element={<Home />} />
            
        </Routes>
      </HelmetProvider>
      <div>
        <h1>Welcome to My React App</h1>
        <p>Page content goes here</p>
      </div>
    </>
  );
};

export default HelmetComponent;
