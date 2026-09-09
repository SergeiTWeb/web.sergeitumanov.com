import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { reactProjects } from '../types/mockData';

function ReactShowcase() {
  // Example of React State: We could use this to filter projects later
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' 
    ? reactProjects 
    : reactProjects.filter(p => p.tags.some(tag => tag.includes(filter)));

  return (
    <div className="showcase-page">
      <h2>React & TypeScript Projects</h2>
      <p className="subtitle">Interactive applications built with modern frontend technologies.</p>
      
      {/* Simple Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={filter === 'All' ? 'active' : ''} 
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={filter === 'React' ? 'active' : ''} 
          onClick={() => setFilter('React')}
        >
          React
        </button>
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ReactShowcase;