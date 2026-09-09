import type { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="card-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;