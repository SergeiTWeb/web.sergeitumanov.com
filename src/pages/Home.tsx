import { useState } from 'react';

// Simple SVG Icon Component to keep code clean
const Icon = ({ path }: { path: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px', color: 'var(--color-text)', flexShrink: 0 }}>
    <path d={path} />
  </svg>
);

function Home() {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="wrapper">
          <h1 className="hero-title">
            Sergei Tumanov
            <small className="hero-subtitle">Web Developer & Designer</small>
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="wrapper">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div 
                className={`flip-card ${showBack ? 'flipped' : ''}`}
                onClick={() => setShowBack(!showBack)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/img/sergeitumanov.jpg" alt="Sergei Tumanov" />
                    <p className="flip-hint">Click to reveal</p>
                  </div>
                  <div className="flip-card-back">
                    <h3>Connect With Me</h3>
                    <div className="social-icons">
                      <a href="https://github.com/SergeiTWeb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a href="mailto:sergeitumanov.web@gmail.com" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-content">
              <h2>About Me</h2>
              <p className="about-intro">Hello, I'm Sergei Tumanov, a web developer focused on building clean, modern and minimal interfaces.</p>
              <p>Recent Full Stack Development graduate from ITMO University, ready to launch my career as a Junior Developer. I bring practical project experience across the full stack and a builder's mindset - I don't just write code, I solve problems. Currently open for full-time junior roles and freelance collaborations.</p>
              <p>I'm passionate about web development, UI/UX design, and creative digital work such as photography, music production, and visual storytelling. I enjoy combining technical precision with a minimal and thoughtful design approach.</p>
              <p>
                <div className="hero-actions">
                  <a href="/cv.pdf" download className="btn-primary hero-btn">
                    Download My CV
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="wrapper">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content"><h3>ITMO University | Russia</h3><p className="timeline-degree">Diploma in Web-Development (Full Stack)</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content"><h3>Holmesglen | Australia</h3><p className="timeline-degree">Certificate IV in IT (Web Development)</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content"><h3>Melbourne Polytechnic | Australia</h3><p className="timeline-degree">Certificate IV in Sound Production</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content"><h3>Berklee Online | USA</h3><p className="timeline-degree">Certificate in Music Production</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2011</div>
              <div className="timeline-content"><h3>Interregional Institute of Economics and Law | Russia</h3><p className="timeline-degree">Diploma in IT (Systems & Network Administration)</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content"><h3>Saint Petersburg State University of Service and Economics | Russia</h3><p className="timeline-degree">Specialist Degree in Management</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="wrapper">
          <div className="skills-grid">
            <div className="skills-column">
              <h2 className="section-title">Core Skills</h2>
              <ul className="skills-list">
                <li><Icon path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />HTML5 & CSS3 (responsive layouts)</li>
                <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />JavaScript (vanilla, basic logic)</li>
                <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />React fundamentals</li>
                <li><Icon path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />Responsive Web Design</li>
                <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />Wordpress & Elementor</li>
                <li><Icon path="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />PHP (basic backend logic, MVC pattern)</li>
                <li><Icon path="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />Server-side routing & templating</li>
                <li><Icon path="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />Node.js & Express basics</li>
                <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />MySQL / PostgreSQL (queries, basic schema)</li>
              </ul>
            </div>
            
            <div className="skills-column">
              <h2 className="section-title">Tools & Workflow</h2>
              <ul className="skills-list">
                <li><Icon path="M12 19l7-7 3 3-7 7-3-3z" />Figma & Photoshop</li>
                <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />VS Code + Extensions</li>
                <li><Icon path="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />Pug & Sass/SCSS</li>
                <li><Icon path="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />Gulp (custom starter workflow)</li>
                <li><Icon path="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9" />Git & GitHub</li>
                <li><Icon path="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />Apache/Nginx basics</li>
                <li><Icon path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />PHP Dev Server / XAMPP / Mailpit</li>
                <li><Icon path="M4 17l6-6-6-6M12 19h8" />Linux (basic development setup)</li>
                <li><Icon path="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />Docker (basic project setup)</li>
              </ul>
            </div>
          </div>
          
          <div className="learning-section" style={{ display: 'none' }}>
            <h2 className="section-title">Currently In Progress</h2>
            <ul className="skills-list">
              <li><Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" />Insert here</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Experience */}
      <section className="experience-section">
        <div className="wrapper">
          <h2 className="section-title">Development Experience</h2>
          <ul className="experience-list">
            <li>Built custom Gulp-based development environment for static websites</li>
            <li>Experience with GitHub for version control and project management</li>
            <li>Basic experience with Docker and project setup using containerized images</li>
            <li>Familiar with Linux environment (basic usage and development setup)</li>
            <li>Problem-solving mindset and ability to debug issues independently</li>
            <li>Experience using AI tools to support development workflow and learning</li>
            <li>Built a lightweight PHP MVC framework from scratch (routing, views, controllers)</li>
            <li>Implemented hybrid projects: static Gulp frontend + PHP backend</li>
          </ul>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="hobbies-section">
        <div className="wrapper">
          <h2 className="section-title">Hobbies & Interests</h2>
          <p className="hobbies-text">Music production, photography, vlogging, design, travel, outdoor activities, and building web projects.</p>
          <p className="hobbies-text highlight">I'm especially drawn to minimalism, structured systems, and creative workflows.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;