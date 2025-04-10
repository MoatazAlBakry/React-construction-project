import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>PROJECT</h1>
        <h2>Rebuilt</h2>
        <div className="hero-image">
          {/* Main building image will be set as background in CSS */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 