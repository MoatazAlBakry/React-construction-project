import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MoreInfo.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details?: {
    location: string;
    year: string;
    size: string;
    features: string[];
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Modern Office Build with Solar Integration – Redline Project',
    description: 'This sleek, energy-efficient commercial building features a bold red exterior and a clean, modern design. The flat roof is outfitted with high-performance solar panels, providing sustainable power while reducing long-term energy costs. Built with a focus on both aesthetics and functionality, the Redline Project stands as a statement of innovation and eco-conscious construction.',
    image: '/React-construction-project/images/projects/project1.jpg',
    details: {
      location: 'Downtown Business District',
      year: '2023',
      size: '25,000 sq ft',
      features: [
        'Solar panel integration',
        'Energy-efficient HVAC system',
        'Smart building technology',
        'Modern glass facade',
        'Green roof system'
      ]
    }
  },
  {
    id: 2,
    title: 'Blush Harmony Interior – Boutique Room Design',
    description: 'This elegant interior project showcases a soft, contemporary aesthetic centered around a refined pink palette. Featuring custom furnishings, rose-toned accents, and warm lighting, the space blends comfort with modern sophistication. From velvet textures to gold-trimmed décor, every detail in the Blush Harmony room was thoughtfully curated to create a cozy yet elevated atmosphere — perfect for relaxing or entertaining in style.',
    image: '/React-construction-project/images/projects/project2.jpg',
    details: {
      location: 'Luxury Residential Complex',
      year: '2022',
      size: '1,200 sq ft',
      features: [
        'Custom interior design',
        'Smart home integration',
        'Premium materials',
        'Custom lighting solutions',
        'Luxury finishes'
      ]
    }
  },
  {
    id: 3,
    title: 'Skyline Tower – Glass-Facade Office Development',
    description: 'Rising high above the cityscape, Skyline Tower is a striking office development defined by its sleek glass façade and modern architectural lines. Designed to maximize natural light and panoramic views, this high-rise blends cutting-edge engineering with sophisticated urban style. The structure features energy-efficient glazing, advanced climate control systems, and premium finishes throughout — setting a new standard for contemporary workspace environments.',
    image: '/React-construction-project/images/projects/project3.jpg',
    details: {
      location: 'Financial District',
      year: '2024',
      size: '500,000 sq ft',
      features: [
        'Double-skin glass facade',
        'Advanced climate control',
        'High-speed elevators',
        'Green building certification',
        'Panoramic city views'
      ]
    }
  }
];

const MoreInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <Link to="/React-construction-project/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <section className="more-info">
      <div className="project-header">
        <img src={project.image} alt={project.title} />
        <h1>{project.title}</h1>
      </div>
      
      <div className="project-content">
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>

        {project.details && (
          <div className="project-details">
            <h2>Project Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <h3>Location</h3>
                <p>{project.details.location}</p>
              </div>
              <div className="detail-item">
                <h3>Year</h3>
                <p>{project.details.year}</p>
              </div>
              <div className="detail-item">
                <h3>Size</h3>
                <p>{project.details.size}</p>
              </div>
            </div>

            <div className="features">
              <h3>Key Features</h3>
              <ul>
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <Link to="/React-construction-project/projects" className="back-link">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default MoreInfo;
