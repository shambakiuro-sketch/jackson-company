export default function Portfolio() {
  const projects = [
    { id: 1, title: 'Commercial Plaza - Downtown' },
    { id: 2, title: 'Residential Complex' },
    { id: 3, title: 'Office Building Renovation' },
    { id: 4, title: 'Retail Space Construction' },
    { id: 5, title: 'Custom Home Build' },
    { id: 6, title: 'Industrial Facility' }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2>Project Portfolio</h2>
        <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          Browse our recent projects showcasing our commitment to quality and excellence in construction.
        </p>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-placeholder">
                {project.title}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#7f8c8d' }}>
          <p>Note: Placeholder images. Update with actual project photos.</p>
        </div>
      </div>
    </section>
  );
}
