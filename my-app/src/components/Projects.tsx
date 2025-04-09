import React from 'react';
import './Projects.css';

interface ProjectCard {
  title: string;
  image: string;
  link: string;
}

const projectData: ProjectCard[] = [
  {
    title: 'Sample Project',
    image: '/images/sample-project.jpg',
    link: '/projects/sample'
  },
  {
    title: 'Modern Building',
    image: '/images/modern-building.jpg',
    link: '/projects/modern-building'
  },
  {
    title: 'Urban Design',
    image: '/images/urban-design.jpg',
    link: '/projects/urban-design'
  },
  {
    title: 'Sustainable Architecture',
    image: '/images/sustainable.jpg',
    link: '/projects/sustainable'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <a href={project.link} className="view-project">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 