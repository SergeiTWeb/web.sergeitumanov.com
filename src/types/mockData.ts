import type { Project } from './Project';

export const reactProjects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    description: "A drag-and-drop kanban board built with React and local storage.",
    tags: ["React", "TypeScript", "CSS Modules"],
    link: "#",
    github: "https://github.com/yourusername/task-manager"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather data fetching using the OpenWeather API.",
    tags: ["React", "TypeScript", "Fetch API"],
    link: "#",
    github: "https://github.com/yourusername/weather-dash"
  },
  {
    id: 3,
    title: "E-commerce Cart",
    description: "A fully functional shopping cart with state management.",
    tags: ["React", "TypeScript", "Context API"],
    link: "#",
    github: "https://github.com/yourusername/ecommerce-cart"
  }
];