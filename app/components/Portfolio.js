'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [images, setImages] = useState({});

  const projects = [
    { id: 1, title: 'Commercial Plaza - Downtown' },
    { id: 2, title: 'Residential Complex' },
    { id: 3, title: 'Office Building Renovation' },
    { id: 4, title: 'Retail Space Construction' },
    { id: 5, title: 'Custom Home Build' },
    { id: 6, title: 'Industrial Facility' }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('portfolioImages');
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2>Project Portfolio</h2>
            <p style={{ maxWidth: '600px' }}>
              Browse our recent projects showcasing our commitment to quality and excellence in construction.
            </p>
          </div>
          <a href="/admin" style={{ background: '#3498db', color: 'white', padding: '0.8rem 1.5rem', textDecoration: 'none', borderRadius: '4px', fontWeight: '600' }}>
            Manage Images
          </a>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              {images[project.id] ? (
                <img src={images[project.id]} alt="Project" />
              ) : (
                <div className="portfolio-placeholder">
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <p style={{ fontSize: '14px', margin: '0' }}>Project Image</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
