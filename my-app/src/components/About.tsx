import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
          At Project Rebuilt, we build more than just structures — we build trust, quality, and lasting partnerships. <br /> <br />
          With over 30 years of experience in the construction industry, our team is dedicated to delivering top-tier residential, commercial, and industrial projects
           across The world.From initial concept to final completion, we bring precision, integrity, and a strong commitment to excellence to every job site. <br /> <br />
            Our reputation is built on a foundation of skilled craftsmanship, transparent communication, and a focus on safety and sustainability.
          </p>
        </div>
        <div className="about-images">
          <div className="image-grid">
            <div className="grid-item">
              {/* Image 1 will be set in CSS */}
            </div>
            <div className="grid-item">
              {/* Image 2 will be set in CSS */}
            </div>
            <div className="grid-item">
              {/* Image 3 will be set in CSS */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 