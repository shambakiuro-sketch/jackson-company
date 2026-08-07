export default function Services() {
  const services = [
    {
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from design to completion. We handle office buildings, retail spaces, and commercial complexes with precision and professionalism.'
    },
    {
      title: 'Residential Projects',
      description: 'Custom home construction and residential renovations. We create beautiful, functional living spaces that exceed expectations and stand the test of time.'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing spaces with expert renovation services. From kitchen remodels to complete renovations, we bring new life to your property.'
    },
    {
      title: 'General Contracting',
      description: 'Full-service general contracting for projects of all sizes. We manage every aspect of construction to ensure timely, budget-conscious delivery.'
    },
    {
      title: 'Project Management',
      description: 'Expert oversight and coordination of your construction project. We ensure seamless execution, budget adherence, and quality results.'
    },
    {
      title: 'Specialized Construction',
      description: 'Unique and specialized construction needs handled by our experienced team. We tackle complex projects with innovative solutions.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          We offer a comprehensive range of construction services tailored to meet your specific needs. Whatever your project requires, we have the expertise to deliver.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
