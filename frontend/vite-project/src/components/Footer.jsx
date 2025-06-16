import React from 'react'
import fb from '../assets/icon/fb.png';
import ig from '../assets/icon/ig.png';
import twitter from '../assets/icon/twitter.jpeg';
import ytb from '../assets/icon/ytb.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">UFC</h3>
        <p className="footer-text">
          Ultimate Fighting Championship® is the world’s leading mixed martial arts organization.
        </p>
      </div>

      <div className="footer-section" id='first'>
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">About UFC</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Connect</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/UFCKorea/?brand_redir=176272595900226"><img src={fb} alt="Facebook" /></a>
          <a href="https://x.com/ufc"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/ufc/"><img src={ig} alt="Instagram" /></a>
          <a href="https://www.youtube.com/@ufc"><img src={ytb} alt="YouTube" /></a>
        </div>
        <p className="copyright">© 2025 UFC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer