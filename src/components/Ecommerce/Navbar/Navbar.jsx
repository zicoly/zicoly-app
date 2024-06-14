import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
