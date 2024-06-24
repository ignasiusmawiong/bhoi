import React, { useState } from 'react';
import './Navbar.css';
import Category from '../Pages/Category';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDonatePage = location.pathname === '/donate';
  const isContactPage = location.pathname ==='/contact';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`navbar ${isDonatePage ? 'solid' : 'transparent'}`}>
      <div className="nav-logo">
        <Link 
        style={{ textDecoration: 'none' }} to="/">
        <h2 style={{textDecoration: 'none',color: isContactPage ? 'black' : 'white',}}>B</h2>
        </Link>
        <h3 style={{color: isContactPage ? 'black' : 'white',}} >Byrchem</h3>
      </div>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}  style={{ textDecoration: 'none',color: isContactPage ? 'black' : 'white', }} />
      </button>
      <ul className={`nav-menu ${menuOpen? 'open' : ''}`} onClick={(e) => {

             if (e.target.tagName === 'A') {

              setMenuOpen(false);

        }

}}>
        <li><Link style={{ textDecoration: 'none', color: isContactPage? 'black': 'white',}} to="/work">Work</Link></li>
        <li>
          {isHomePage ? (
            <ScrollLink to="about-section" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none', color:  isContactPage ? 'black' : 'white', }}
            onClick={(e) => {

              setMenuOpen(false);
      
              // You can also add e.preventDefault() to prevent the default scrolling behavior
      
              e.preventDefault();
      
            }}
            >
              About us
            </ScrollLink>
          ) : (
            <Link style={{ textDecoration: 'none', color: isContactPage ? 'black': 'white', }} to="/about">About us</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink

            to="contact-section"

            smooth={true}

            duration={500}

            style={{

              cursor: 'pointer',

              textDecoration: 'none'
            }}

            onClick={(e) => {

              setMenuOpen(false);

              e.preventDefault();

            }}

          >

            Contact

          </ScrollLink>
          ) : (
            <Link style={{ textDecoration: 'none', color: isContactPage? 'black': 'white' ,}} to="/contact">Contact</Link>
          )}
        </li>

        <li style={{ textDecoration: 'none', color: isContactPage? 'black': 'white' }} to="/donate" ><Category/></li>
      </ul>
    </div>
  );
}

export default Navbar;