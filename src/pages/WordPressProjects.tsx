import { Link } from 'react-router-dom';

const wordpressProjects = [
  {
    id: 1,
    name: "Blood Runs Dry",
    url: "https://bloodrunsdry.com",
    screenshot: "/img/projects/wp-blood.png",
    description: "Melbourne-based groove metal band website."
  },
  {
    id: 2,
    name: "NCTMMRN",
    url: "https://nctmmrn.com",
    screenshot: "/img/projects/wp-nctmmrn.png",
    description: "Independent record label website."
  },
  {
    id: 3,
    name: "Sergei Tumanov",
    url: "https://sergeitumanov.com",
    screenshot: "/img/projects/wp-sergei.png",
    description: "Personal portfolio and sound artist website."
  },
  {
    id: 4,
    name: "Kerry & Co Design",
    url: "https://kerrycodesign.com",
    screenshot: "/img/projects/wp-kerry-co.png",
    description: "Wallcoverings, textiles, and home accessories retailer with e-commerce functionality."
  },
  {
    id: 5,
    name: "NRZK Productions",
    url: "https://nrzkproduction.com",
    screenshot: "/img/projects/wp-nrzk.png",
    description: "Sound and music production company website."
  },
  {
    id: 6,
    name: "Callum Lee Gow",
    url: "https://callumleegow.com",
    screenshot: "/img/projects/wp-callum.png",
    description: "Media composition and sound design portfolio."
  }
];

function WordPressProjects() {
  return (
    <div className="wp-projects-page fade-in">
      <div className="wrapper">
        <h2 className="section-title">WordPress Projects</h2>
        <p className="wp-subtitle">A selection of WordPress websites I've developed for various clients.</p>
        
        <div className="wp-grid">
          {wordpressProjects.map((project) => (
            <div key={project.id} className="wp-card">
              <div className="wp-screenshot">
                <img src={project.screenshot} alt={`${project.name} screenshot`} />
                <div className="wp-overlay">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="wp-link">
                    Visit Site →
                  </a>
                </div>
              </div>
              <div className="wp-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="wp-button">
                  View Live Site
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="wp-actions">
          <Link to="/portfolio" className="btn-secondary">← Return to Portfolio</Link>
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
}

export default WordPressProjects;