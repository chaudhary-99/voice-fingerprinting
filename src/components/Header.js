import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import logo from '../logo.png';
import './Header.css';  // Import styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">VoicePrint</h1>
      </div>
      <div className="header-right">
        <Link to="/" className="home-button">Home</Link>
      </div>
    </header>
  );
};

export default Header;
