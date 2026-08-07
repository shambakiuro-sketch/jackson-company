export default function Process() {
  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Meet with our team to discuss your project needs, vision, and requirements. We listen carefully to understand your goals.',
      image: '/step-1-consultation.jpg'
    },
    {
      id: 2,
      title: 'Planning & Design',
      description: 'Our expert team creates detailed plans and designs for your project. We ensure every detail is perfect before construction begins.',
      image: '/step-2-planning.jpg'
    },
    {
      id: 3,
      title: 'Estimation & Proposal',
      description: 'Receive a transparent, detailed estimate with realistic timelines and costs. No hidden fees, just honest pricing.',
      image: '/step-3-estimation.jpg'
    },
    {
      id: 4,
      title: 'Construction',
      description: 'Our skilled team executes the project with precision, quality craftsmanship, and strict safety standards.',
      image: '/step-4-construction.jpg'
    },
    {
      id: 5,
      title: 'Completion & Handover',
      description: 'Final inspection, quality assurance, and project handover. Your construction project is complete and ready to use.',
      image: '/step-5-completion.jpg'
    }
  ];

  return (
    <section className="process" id="process" style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#2c3e50' }}>Our Construction Process</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {steps.map((step) => (
            <div key={step.id} style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={step.image} 
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: '#d4a574',
                  color: 'white',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  {step.id}
                </div>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '0.8rem', fontSize: '1.2rem', margin: '0 0 0.8rem 0' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#7f8c8d', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
