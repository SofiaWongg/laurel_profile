import React from 'react';
import p1 from './p2-1.png';
import p2 from './p2-2.png';
import p3 from './p2-3.png';

const Project2Page = () => {
  return (
    <div className="project-page">
      <div>
        <h1>Tarot Cards</h1>
        <p>Details about Project 2 coming soon...</p>
      </div>

        <img src={p1} alt="tarot" className="project-image" />
        <img src={p2} alt="tarot" className="project-image" />
        <img src={p3} alt="tarot" className="project-image" />

    </div>
  );
};

export default Project2Page;
