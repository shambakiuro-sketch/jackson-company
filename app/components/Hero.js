export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Jackson Construction Co., Inc.</h1>
        <p>Professional construction services built on quality and trust</p>
        <button 
          className="btn"
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
