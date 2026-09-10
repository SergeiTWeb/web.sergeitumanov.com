import { useEffect, useState } from 'react';

// Project Data based on your old site
const projects = [
  {
    id: 1,
    title: "Gulp Starter Kit",
    description: "Custom development workflow for static websites with Pug, SCSS and JS automation.",
    tags: ["Gulp", "Pug", "SCSS", "JavaScript"],
    image: "/img/project-gulp.jpg", 
    link: "/projects/gulp-starter/index.html", 
    github: "https://github.com/SergeiTWeb/gulp-project",
    status: "Completed",
    type: "standard"
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "This very website! A modern, minimalist, and fully responsive portfolio built with React, TypeScript, and Vite. Features smooth client-side routing, custom animations, and a component-based architecture.",
    tags: ["React", "TypeScript", "Vite", "React Router"],
    image: "/img/project-react.jpg",
    link: "/contact", // Links to contact page
    linkText: "Get a Quote", // Custom link text
    status: "Completed",
    type: "quote"
  },
  {
    id: 3,
    title: "PHP MVC Template",
    description: "A lightweight, custom-built Model-View-Controller framework for PHP. Features clean routing, separation of concerns, and a structured environment for scalable backend development.",
    tags: ["PHP", "MVC", "MySQL", "OOP"],
    image: "/img/project-php.jpg",
    link: "/projects/php-mvc/", 
    github: "https://github.com/SergeiTWeb/phpMvc",
    status: "Completed",
    type: "standard"
  },
  {
    id: 4,
    title: "Web and Graphic Design",
    description: "Creative design work including website mockups, branding, and visual identity projects.",
    tags: ["Design", "UI/UX", "Branding", "Print"],
    image: "/img/project-design.jpg",
    link: "/dwnlds/SergeiTumanovDesignPortfolio.pdf", // Links to downloadable portfolio PDF
    linkText: "Download Portfolio",
    status: "Completed",
    type: "quote"
  },
  {
    id: 5,
    title: "React Experiments",
    description: "Interactive React applications showcasing modern frontend development patterns and component-based architecture.",
    tags: ["React", "TypeScript", "JavaScript"],
    image: "/img/project-reactApp.jpg",
    link: "https://mycollection.sergeitumanov.com",
    github: "https://github.com/SergeiTWeb/myCollection",
    status: "Completed",
    type: "standard"
  },
  {
    id: 6,
    title: "WordPress Development",
    description: "Custom WordPress websites and themes built for various clients including e-commerce, portfolios, and business sites.",
    tags: ["WordPress", "PHP", "MySQL", "CSS"],
    image: "/img/project-wp.jpg",
    link: "/wordpress-projects", // Links to WordPress projects page
    linkText: "View Projects",
    status: "Completed",
    type: "wp-projects"
  }
];

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Simple fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`portfolio-page ${isVisible ? 'fade-in' : ''}`}>
      <div className="wrapper">
        <h2 className="section-title">Selected Work</h2>
        <p className="portfolio-subtitle">A collection of projects showcasing my journey in web development.</p>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image-wrapper">
                <div className="card-placeholder" style={{backgroundImage: `url(${project.image})`}}>
                  <span className="status-badge">{project.status}</span>
                </div>
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
                      <a href={project.link} className="action-link" target={project.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        Live Demo
                      </a>
                      <a href={project.github} className="action-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </>
                  )}
                  
                  {project.type === "quote" && (
                    <a href={project.link} className="action-link primary">{project.linkText}</a>
                  )}
                  
                  {project.type === "modal" && (
                    <>
                      <a href={project.link} className="action-link" download>{project.linkText}</a>
                      <button onClick={() => setShowModal(true)} className="action-link">{project.githubText}</button>
                    </>
                  )}
                  
                  {project.type === "wp-projects" && (
                    <a href={project.link} className="action-link primary">{project.linkText}</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Graphic Design */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Graphic Design Projects</h2>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="modal-note">[Your graphic design portfolio content will be added here]</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;