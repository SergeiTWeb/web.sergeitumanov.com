import { Link } from 'react-router-dom';

const experiments = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This very website! A modern, minimalist, and fully responsive portfolio built with React, TypeScript, and Vite. Features smooth client-side routing, custom animations, and a component-based architecture.",
    tags: ["React", "TypeScript", "Vite", "React Router"],
    image: "/img/project-react.jpg",
    link: "/",
    type: "portfolio"
  },
  {
    id: 2,
    title: "Simple Todo List",
    description: "A modern, feature-rich todo list application built with React. Features persistent localStorage, modern UI with smooth animations, and full keyboard accessibility.",
    tags: ["React", "Vite", "LocalStorage", "CSS3"],
    image: "/img/project-todo.jpg",
    link: "https://sergeitweb.github.io/SimpleTodoList/",
    github: "https://github.com/SergeiTWeb/SimpleTodoList",
    type: "standard"
  },
  {
    id: 3,
    title: "Russian Single Word Translator",
    description: "A lightweight React-based dictionary app that translates Russian words into multiple languages (English, German, French, Spanish) using the Yandex Dictionary API.",
    tags: ["React", "Yandex API", "Vanilla CSS"],
    image: "/img/project-translator.jpg",
    link: "https://sergeitweb.github.io/ru-dictionary-app/",
    github: "https://github.com/SergeiTWeb/ru-dictionary-app",
    type: "standard"
  }
];

function Experiments() {
  return (
    <div className="portfolio-page topGap fade-in">
      <div className="wrapper">
        <h2 className="section-title">React Experiments / Little Projects</h2>
        <p className="portfolio-subtitle">A playground for testing new ideas, libraries, and frontend patterns.</p>
        
        <div className="portfolio-grid">
          {experiments.map((project) => (
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
                      {project.link && project.link !== "#" && (
                        <a href={project.link} className="action-link" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} className="action-link" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </>
                  )}
                  
                  {project.type === "portfolio" && (
                    <a href={project.link} className="action-link">
                      View Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="wp-actions" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/portfolio" className="btn-secondary">← Return to Portfolio</Link>
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
}

export default Experiments;