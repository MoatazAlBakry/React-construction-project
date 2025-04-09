import React, { useState } from 'react';
import './Gallery.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/lighthouse-1.jpg',
    alt: 'Lighthouse at sunset'
  },
  {
    id: 2,
    src: '/images/gallery/lighthouse-2.jpg',
    alt: 'Purple sky lighthouse'
  },
  {
    id: 3,
    src: '/images/gallery/modern-architecture.jpg',
    alt: 'Modern glass architecture'
  },
  {
    id: 4,
    src: '/images/gallery/lighthouse-3.jpg',
    alt: 'Blue lighthouse'
  },
  {
    id: 5,
    src: '/images/gallery/historic-building.jpg',
    alt: 'Historic architecture'
  },
  {
    id: 6,
    src: '/images/gallery/church-interior.jpg',
    alt: 'Church interior'
  },
  {
    id: 7,
    src: '/images/gallery/street-view.jpg',
    alt: 'Historic street view'
  },
  {
    id: 8,
    src: '/images/gallery/columns.jpg',
    alt: 'Classical columns'
  },
  {
    id: 9,
    src: '/images/gallery/venice.jpg',
    alt: 'Venice architecture'
  },
  {
    id: 10,
    src: '/images/gallery/modern-building.jpg',
    alt: 'Modern building perspective'
  }
];

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 5;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const currentImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Photo</h2>
        <h3>Gallery</h3>
      </div>
      
      <div className="gallery-grid">
        {currentImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="gallery-pagination">
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

export default Gallery; 