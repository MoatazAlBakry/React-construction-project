import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ARCHITECTS</h3>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>+1 234 567 8900</p>
          <p>info@architectfirm.com</p>
        </div>

        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Architecture Street</p>
          <p>Design District, City 12345</p>
        </div>

        <div className="footer-section social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 