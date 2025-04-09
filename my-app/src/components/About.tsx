import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae 
            erat consequat auctor eu in elit.
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