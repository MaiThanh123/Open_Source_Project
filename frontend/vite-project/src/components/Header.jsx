
import React from 'react';
import ufc from '../assets/icon/ufc.jpeg';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <div className="header__group header__group--left">
          <Link to="/event" className="header__item">Event</Link>
          <Link to="/ranking" className="header__item">Ranking</Link>
          <Link to="/toptier" className="header__item">Top tier</Link>
          <Link to="/news" className="header__item">News</Link>
        </div>

        <div className="header__group header__group--right">
          <Link to="/compare" className="header__item">Compare</Link>
          <Link to="/watch" className="header__item">Watch</Link>
          <Link to="/shop" className="header__item">Shop</Link>
        </div>

        <div className="header__logo-wrapper">
          <Link to="/"> 
            <Logo className="header__logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;