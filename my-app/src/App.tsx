// Importing necessary libraries and components
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import MissionStatement from './components/MissionStatement.tsx';
import Projects from './components/Projects.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import Gallery from './components/Gallery.tsx';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <MissionStatement />
      <Projects />
      <ContactForm />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
