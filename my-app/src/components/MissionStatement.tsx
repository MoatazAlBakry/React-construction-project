import React from 'react';
import './MissionStatement.css';

const MissionStatement: React.FC = () => {
  return (
    <section className="mission-statement">
      <h2>Main Focus/Mission Statement</h2>
      <div className="mission-content">
        <div className="mission-column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="mission-column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
            consequat hendrerit lacus, ac molestie orci.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement; 