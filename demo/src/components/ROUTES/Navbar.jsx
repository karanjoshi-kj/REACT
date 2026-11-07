import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <ul>
        <li><Link to="/">Information</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
  );
};

export default Navbar;