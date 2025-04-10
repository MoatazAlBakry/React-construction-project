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
    title: 'Modern Office Build with Solar Integration – Redline Project',
    description: 'This sleek, energy-efficient commercial building features a bold red exterior and a clean, modern design. The flat roof is outfitted with high-performance solar panels, providing sustainable power while reducing long-term energy costs. Built with a focus on both aesthetics and functionality, the Redline Project stands as a statement of innovation and eco-conscious construction.',
    image: '/images/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Blush Harmony Interior – Boutique Room Design',
    description: 'This elegant interior project showcases a soft, contemporary aesthetic centered around a refined pink palette. Featuring custom furnishings, rose-toned accents, and warm lighting, the space blends comfort with modern sophistication. From velvet textures to gold-trimmed décor, every detail in the Blush Harmony room was thoughtfully curated to create a cozy yet elevated atmosphere — perfect for relaxing or entertaining in style.',
    image: '/images/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Skyline Tower – Glass-Facade Office Development',
    description: 'Rising high above the cityscape, Skyline Tower is a striking office development defined by its sleek glass façade and modern architectural lines. Designed to maximize natural light and panoramic views, this high-rise blends cutting-edge engineering with sophisticated urban style. The structure features energy-efficient glazing, advanced climate control systems, and premium finishes throughout — setting a new standard for contemporary workspace environments.',
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