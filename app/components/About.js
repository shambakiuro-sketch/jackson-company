export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Jackson Construction</h2>
            <p>
              Jackson Construction Co., Inc. is committed to delivering exceptional construction services in the Peabody area and surrounding Massachusetts communities. With a team of experienced professionals, we pride ourselves on quality craftsmanship, attention to detail, and customer satisfaction.
            </p>
            <p>
              Whether you're planning a residential project, commercial development, or industrial construction, our team has the expertise and dedication to bring your vision to life. We approach every project with professionalism, transparency, and a commitment to excellence.
            </p>
            <p>
              Your trust is our most valuable asset. We work closely with clients from project conception through completion, ensuring clear communication and outstanding results every step of the way.
            </p>
          </div>
          <div style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486718448742-f049cd451bba?w=600&h=500&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            minHeight: '400px',
          }}>
          </div>
        </div>
      </div>
    </section>
  );
}
