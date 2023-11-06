import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="TravelLogo" alt="Logo" />
      </div>
      <div className="buttons">
        <button className="nav-button">Login</button>
        <button className="nav-button">SignUp</button>
      </div>
    </nav>
  );
};

export default Navbar;
