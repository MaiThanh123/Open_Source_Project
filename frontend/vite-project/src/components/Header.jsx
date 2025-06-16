
import React from 'react';
import ufc from '../assets/icon/ufc.jpeg';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.jsx';
import "./Header.css";

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <header className="header">
      <div className="header__navigation">
        <div className="header__group header__group--left">
          <Link to="/event" className="header__item">Event</Link>
          <Link to="/ranking" className="header__item">Ranking</Link>
          <Link to="/toptier" className="header__item">Top Tier</Link>
          <Link to="/news" className="header__item">News</Link>
        </div>

        <div className="header__group header__group--right">
          <Link to="/compare" className="header__item">Compare</Link>
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
