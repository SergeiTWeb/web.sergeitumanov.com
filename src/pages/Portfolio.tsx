import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "The TieBreaker Project",
    description: "An AI-powered decision intelligence workbench built with React, TypeScript, and Express. Transforms complex choices into structured, mathematically-backed comparisons.",
    tags: ["React", "TypeScript", "Web App"],
    image: "/img/tie-breaker.jpg",
    link: "https://thetiebreaker.sergeitumanov.com", 
    github: "https://github.com/SergeiTWeb/thetiebreaker",
    type: "standard"
  },
  {
    id: 2,
    title: "Gulp Starter Kit",
    description: "Custom development workflow for static websites with Pug, SCSS and JS automation.",
    tags: ["Gulp", "Pug", "SCSS", "JavaScript"],
    image: "/img/project-gulp.jpg", 
    link: "/projects/gulp-starter/index.html", 
    github: "https://github.com/SergeiTWeb/gulp-project",
    type: "standard"
  },
  {
    id: 3,
    title: "PHP MVC Template",
    description: "A lightweight, custom-built Model-View-Controller framework for PHP. Features clean routing, separation of concerns, and a structured environment for scalable backend development.",
    tags: ["PHP", "MVC", "MySQL", "OOP"],
    image: "/img/project-php.jpg",
    link: "/projects/php-mvc/", 
    github: "https://github.com/SergeiTWeb/phpMvc",
    type: "standard"
  },
  {
    id: 4,
    title: "Web and Graphic Design",
    description: "Creative design work including website mockups, branding, and visual identity projects.",
    tags: ["Design", "UI/UX", "Branding", "Print"],
    image: "/img/project-design.jpg",
    link: "/dwnlds/SergeiTumanovDesignPortfolio.pdf", 
    linkText: "Download",
    figmaLink: "https://www.figma.com/design/fELjhpH0PLjK6BDuGOs7DA/Sergei-Tumanov----CV--UPD0926-?node-id=0-1&t=jChMSk8fZKDfrIWX-1",
    type: "design"
  },
  {
    id: 5,
    title: "React Experiments",
    description: "Interactive React applications showcasing modern frontend development patterns and component-based architecture.",
    tags: ["React", "TypeScript", "JavaScript"],
    image: "/img/project-reactApp.jpg",
    experimentsLink: "/experiments", 
    type: "experiments"
  },
  {
    id: 6,
    title: "WordPress Development",
    description: "Custom WordPress websites and themes built for various clients including e-commerce, portfolios, and business sites.",
    tags: ["WordPress", "PHP", "MySQL", "CSS"],
    image: "/img/project-wp.jpg",
    link: "/wordpress-projects", 
    linkText: "View Projects",
    type: "wp-projects"
  }
];

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`portfolio-page topGap ${isVisible ? 'fade-in' : ''}`}>
      <div className="wrapper">
        <h2 className="section-title">Selected Work</h2>
        <p className="portfolio-subtitle">A collection of projects showcasing my journey in web development.</p>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image-wrapper">
                <div className="card-placeholder" style={{backgroundImage: `url(${project.image})`}}></div>
              </div>
              
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="card-actions">
                  {project.type === "standard" && (
                    <>
                      <a href={project.link} className="action-link" target={project.link && project.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        Live Demo
                      </a>
                      <a href={project.github} className="action-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </>
                  )}
                  
                  {project.type === "quote" && (
                    <a href={project.link} className="action-link primary">{project.linkText}</a>
                  )}
                  
                  {project.type === "design" && (
                    <>
                      <a href={project.link} className="action-link primary" download>
                        {project.linkText}
                      </a>
                      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="action-link secondary">
                        Figma
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </>
                  )}
                  
                  {project.type === "wp-projects" && (
                    <a href={project.link} className="action-link primary">{project.linkText}</a>
                  )}

                  {project.type === "experiments" && (
                    <a href={project.experimentsLink} className="action-link primary">View Experiments</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Graphic Design Projects</h2>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="modal-note">[Your graphic design portfolio content will be added here]</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;