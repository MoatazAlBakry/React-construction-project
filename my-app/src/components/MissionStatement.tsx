import React from 'react';
import './MissionStatement.css';

const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <h2>Main Focus/Mission Statement</h2>
      <div className="mission-content">
        <div className="mission-column">
          <p>
          Whether you're planning a custom home, a commercial build-out, or a large-scale infrastructure project, 
          we have the expertise and resources to bring your vision to life — on time and within budget.
          </p>
        </div>
        <div className="mission-column">
          <p>
          Let us turn your ideas into reality. Partner with Project Rebuilt where construction meets craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement; 