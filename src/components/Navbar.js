import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbarHeading">Math Magicians</h1>
    <div className="navitems">
      <NavLink to="/" className="navitem">Home</NavLink>
      <NavLink to="/calculator" className="navitem bordered">Calculator</NavLink>
      <NavLink to="/quotes" className="navitem">Quote</NavLink>
    </div>
  </nav>
);

export default Navbar;
