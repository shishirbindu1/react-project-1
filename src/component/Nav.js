// Nav.js

import React from 'react';
import logo from '../Images/brand_logo.png'
import './Nav.css';
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt ="logo" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Blog</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
