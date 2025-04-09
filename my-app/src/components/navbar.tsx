import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        {/* Logo (Left) */}
        <div className="navbar-brand d-flex align-items-center">
          <img src="/logo.png" alt="Logo" className="me-2" style={{ height: '40px' }} />
          <span className="fs-4 fw-bold text-primary">Brand</span>
        </div>

        {/* Nav Links (Center) */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-dark">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-dark">Contact</Link>
          </li>
        </ul>

        {/* Empty div for spacing balance or right-side content in the future */}
        <div className="d-none d-lg-block" style={{ width: '40px' }}></div>
      </div>
    </nav>
  );
};

export default Navbar;