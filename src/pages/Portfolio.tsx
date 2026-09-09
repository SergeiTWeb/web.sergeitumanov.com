import { useEffect, useState } from 'react';

// Project Data based on your old site
const projects = [
  {
    id: 1,
    title: "Gulp Starter Kit",
    description: "Custom development workflow for static websites with Pug, SCSS and JS automation.",
    tags: ["Gulp", "Pug", "SCSS"],
    image: "/img/project-gulp.jpg",
    link: "#",
    github: "#",
    status: "Completed"
  },
  {
    id: 2,
    title: "Frontend Website",
    description: "Responsive website built with HTML, CSS and JavaScript. (This portfolio is built using this kit).",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/project-frontend.jpg",
    link: "#",
    github: "#",
    status: "Completed"
  },
  {
    id: 3,
    title: "PHP MVC Template",
    description: "Simple and lightweight MVC framework for PHP with clear structure (routes, controllers, models, views).",
    tags: ["PHP", "MVC", "MySQL"],
    image: "/img/project-php.jpg",
    link: "#",
    github: "#",
    status: "Completed"
  },
  {
    id: 4,
    title: "JavaScript Projects",
    description: "Small interactive experiments and learning projects.",
    tags: ["JavaScript", "DOM"],
    image: "/img/project-js.jpg",
    link: "#",
    github: "#",
    status: "Coming Soon"
  },
  {
    id: 5,
    title: "React Experiments",
    description: "Learning component-based frontend development and modern UI patterns.",
    tags: ["React", "TypeScript"],
    image: "/img/project-react.jpg",
    link: "#",
    github: "#",
    status: "In Progress"
  },
  {
    id: 6,
    title: "WordPress Development",
    description: "Exploring CMS-based website development and custom theme creation.",
    tags: ["WordPress", "PHP"],
    image: "/img/project-wp.jpg",
    link: "#",
    github: "#",
    status: "In Progress"
  }
];

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  // Simple fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
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
                  <a href={project.link} className="action-link">Live Demo</a>
                  <a href={project.github} className="action-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;