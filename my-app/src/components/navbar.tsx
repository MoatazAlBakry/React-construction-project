import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/React-construction-project" className="logo">PR</Link>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/React-construction-project">Main</Link></li>
          <li><Link to="/React-construction-project/gallery">Gallery</Link></li>
          <li><Link to="/React-construction-project/projects">Projects</Link></li>
          <li><Link to="/React-construction-project/about">About</Link></li>
          <li><Link to="/React-construction-project/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;