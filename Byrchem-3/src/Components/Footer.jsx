import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Category from '../Pages/Category';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Byrchem</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Category/></li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61561668590702&mibextid=ZbWKwL " target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Byrchem. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
