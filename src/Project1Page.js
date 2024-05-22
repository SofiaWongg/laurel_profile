import React from 'react';
import './project_page.css';
import p1 from './p1-1.png';
import p2 from './p1-2.png';
import p3 from './p1-3.png';
import p4 from './p1-4.png';
import p5 from './p1-5.png';
import p6 from './p1-6.png';
import p7 from './p1-7.png';
import p8 from './p1-8.png';
import p9 from './p1-9.png';
import p10 from './p1-10.png';

const Project1Page = () => {
  return (
    <div className="project-page">
      <div>
        <h1>Black and White Design</h1>
        <p>Details about Project 1 coming soon...</p>
      </div>

        <img src={p1} alt="tarot" className="project-image" />
        <img src={p2} alt="tarot" className="project-image" />
        <img src={p3} alt="tarot" className="project-image" />
        <img src={p4} alt="tarot" className="project-image" />
        <img src={p5} alt="tarot" className="project-image" />
        <img src={p6} alt="tarot" className="project-image" />
        <img src={p7} alt="tarot" className="project-image" />
        <img src={p8} alt="tarot" className="project-image" />
        <img src={p9} alt="tarot" className="project-image" />
        <img src={p10} alt="tarot" className="project-image" />

    </div>

  );
};

export default Project1Page;