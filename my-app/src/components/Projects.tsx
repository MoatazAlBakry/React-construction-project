import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sample Project',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '/images/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Sample Project 2',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '/images/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Sample Project 3',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '/images/projects/project3.jpg'
  }
];

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const currentProjects = projectsData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Our</h2>
        <h3>Projects</h3>
      </div>

      <div className="projects-list">
        {currentProjects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <button className="view-more">VIEW MORE →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-pagination">
        <span className="current-page">
          {currentPage.toString().padStart(2, '0')}
        </span>
        <span className="total-pages">
          {totalPages.toString().padStart(2, '0')}
        </span>
        <button 
          className="nav-button prev" 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          ←
        </button>
        <button 
          className="nav-button next" 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Projects; 