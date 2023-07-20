import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbarHeading">Math Magicians</h1>
    <div className="navitems">
      <Link to="/" className="navitem">Home</Link>
      <Link to="/calculator" className="navitem bordered">Calculator</Link>
      <Link to="/quotes" className="navitem">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
