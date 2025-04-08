// Importing necessary libraries and components
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

const Home = () => <div className="p-4">Welcome to the Home Page</div>;
const About = () => <div className="p-4">About Us</div>;
const Contact = () => <div className="p-4">Contact Page</div>;

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App
