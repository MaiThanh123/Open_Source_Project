import React from 'react';
import ufc from '../assets/icon/ufc.jpeg';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={ufc} alt="UFC Logo" className="ufc-logo" />
      </div>
      <nav className="header-right">
        <a href="#" className="nav-item">Rankings</a>
        <a href="#" className="nav-item">Events</a>
      </nav>
    </header>
  );
}

export default Header