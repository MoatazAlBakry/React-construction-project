import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
      <nav className="">
        <div className="">
          {/* Logo (Left) */}
          <div className="text-xl font-bold text-blue-600">
            <img src="/logo.png" alt="Logo" className="" />
          </div>
  
          {/* Nav Links (Center) */}
          <ul className="">
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/about" className="">About</Link></li>
            <li><Link to="/contact" className="">Contact</Link></li>
          </ul>
  
          {/* Empty div for spacing balance */}
          <div className=""></div>
        </div>
      </nav>
    );
  };
  

export default Navbar;