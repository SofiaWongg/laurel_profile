import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // make sure your logo image is in the src folder
import profileImage from './profile.png'; // make sure to add a profile image in the src folder
import profilePhoto from './profilePhoto.png'
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import experience1 from './experience1.png';
import experience2 from './experience2.png';
import experience3 from './experience3.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import project6 from './project6.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
    <div className="App">
      <header className="main-header">
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>
      <section className="intro-section">
        <div className="intro-text">
          <h1>Hi, I'm Laurel</h1>
          <p>I'm a digital product designer and frontend developer focused on creating intuitive, science-backed experiences.</p>
        </div>
        <div className="intro-image">
          <img src={profileImage} alt="Laurel" />
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>About</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePhoto} alt="Laurel" />
          </div>
          <div className="about-details">
            <div className="tabs">
              <button onClick={() => handleTabClick('experience')} className={activeTab === 'experience' ? 'active' : ''}>
                Experience/Skills
              </button>
              <button onClick={() => handleTabClick('bio')} className={activeTab === 'bio' ? 'active' : ''}>
                Bio
              </button>
            </div>
            <div className="tab-content">
              {activeTab === 'experience' && (
                <div className="experience">
                  <h3>Experience</h3>

                  <div className="experience-cells">
                    {/* Experience Cell 3 */}
                  <div className="experience-cell">
                    <div className="thumbnail">
                      <img src={experience3} alt="Thumbnail " />
                    </div>
                    <div className="experience-details">
                    <div className="experience-header">
                      <b>Graphic Design</b>
                      <p>PickUp Sports - <span className="location">Greensboro, NC</span></p>
                    </div>
                    <div className="experience-date">2024</div>
                    </div>
                  </div>
                {/* Experience Cell 1 */}
                <div className="experience-cell">
                  <div className="thumbnail">
                    <img src={experience1} alt="thumbnail" />
                  </div>
                  <div className="experience-details">
                    <div className="experience-header">
                      <b>Camp Councelor</b>
                      <p>New Garden Friends School - <span className="location">Greensboro, NC</span></p>
                    </div>
                    <div className="experience-date">2021 - 2023</div>
                  </div>
                </div>
                {/* Experience Cell 2 */}
                <div className="experience-cell">
                  <div className="thumbnail">
                    <img src={experience2} alt="Thumbnail 2" />
                  </div>
                  <div className="experience-details">
                  <div className="experience-header">
                      <b>Lifegaurd</b>
                      <p>Friendly Pool Park - <span className="location">Greensboro, NC</span></p>
                    </div>
                    <div className="experience-date">2019 - 2020</div>
                  </div>
                </div>
                {/* Add more experience cells as needed */}
              </div>

              <div className="skills">
              <h3>Skills</h3>
              <div className="skill-cells">
                {/* Skill Cells */}
                <div className="skill-cell" style={{ backgroundColor:'#C4E3FC' }}>
                  <p>Adobe Photoshop</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#FFC3D7' }}>
                  <p>Polymer Clay</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#D6C7FF' }}>
                  <p>Fluent English</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#C4E3FC' }}>
                  <p>Adobe Illustrator</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#D6C7FF' }}>
                  <p>Fluent French</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#C4E3FC' }}>
                  <p>Powerpoint</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#C4E3FC' }}>
                  <p>Word</p>
                </div>
                <div className="skill-cell" style={{ backgroundColor: '#FFC3D7' }}>
                  <p>Acrylic Paint</p>
                </div>

                {/* Add more skill cells as needed */}
              </div>
              <div class="index">
              <div class="index-item">
                <div class="circle software"></div>
                <span>Software</span>
              </div>
              <div class="index-item">
                <div class="circle language"></div>
                <span>Medium</span>
              </div>
              <div class="index-item">
                <div class="circle medium"></div>
                <span>Other</span>
              </div>
            </div>
            </div>

                </div>
              )}
              {activeTab === 'bio' && (
                <div className="bio">
                  <h3>Hi, I'm Laurel. It's nice to meet you.</h3>
                  <p>I’m a Graphic Designer based in Paris, and I am incredibly passionate about creating both digital and physical art that is not only beautiful but also intuitive and accessible to a diverse audience.</p>
                  <p>I am currently pursuing my B.A. in Graphic Design at LISAA (L'Institut Supérieur des Arts Appliqués) Paris and finishing my first year. Prior to this, I studied abroad in Paris, France at the Fondation Robert de Sorbonne during the 2022-2023 school year as part of my education at the University of North Carolina, Wilmington, where I made the Dean's List in the Fall 2021 semester. I graduated from Grimsley High School in North Carolina in May 2021, where I accelerated my French studies, completing five years of material in four years, and achieved a weighted GPA of 4.39/4.5.</p>
                  <p>In addition to my studies, I have gained valuable experience through various roles. I worked as a Camp Counselor at New Garden Friend School Summer Camp in Greensboro, NC, for the summers of 2021, 2022, and 2023. In this role, I organized weekly themed activities for children from pre-school to sixth grade. I also worked as a Lifeguard at Friendly Park Pool in Greensboro, NC, during the summers of 2019 and 2020, where I was certified by the Red Cross in lifeguarding, CPR, First Aid, and AED.</p>
                  <p>During the beginning of the COVID-19 pandemic from March to August 2020, I provided child care for a family whose parents are healthcare workers. I helped the children with online school and engaged them with treasure hunts, games, craft activities, and cooking. Additionally, in August 2019, I served as a Crew member at the CDSS at Camp Louise in Pennsylvania, where I acted as a childcare monitor and community leader at a multigenerational family dance camp.</p>
                  <p>I am fluent in French and am excited to continue growing as a designer. Continue scrolling to see my work and projects.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="projects-section">
        <h2>Projects</h2>
        
        <div class="project-grid">

          <div class="project-cell">
            <img src={project1} alt="Project 1" class="project-image" />
            <div class="project-footer">
              <h1>B&W Branding</h1>
              </div>
          </div>
          

          <div class="project-cell">
            <img src={project2} alt="Project 2" class="project-image" />
            <div class="project-footer">
              <h1>Tarot Cards</h1>
              </div>
          </div>
          <div class="project-cell">
            <img src={project3} alt="Project 3" class="project-image" />
            <div class="project-footer">
              <h1>Bag Design</h1>
              </div>
          </div>
          <div class="project-cell">
            <img src={project4} alt="Project 4" class="project-image" />
            <div class="project-footer">
              <h1>Features in B&W</h1>
              </div>
          </div>
          <div class="project-cell">
            <img src={project5} alt="Project 5" class="project-image" />
            <div class="project-footer">
              <h1>Paper Design</h1>
              </div>
          </div>
          <div class="project-cell">
            <img src={project6} alt="Project 6" class="project-image" />
            <div class="project-footer">
              <h1>Movie Poster</h1>
              </div>
          </div>
        </div>
      </section>
      {/* Social Media Links Section */}
      <footer className="social-footer">
        {/* <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a> */}
        <a href="https://www.instagram.com/laurelholland.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="lmh.running@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
      </footer>
    </div>
    </Router>
  );
}

export default App;