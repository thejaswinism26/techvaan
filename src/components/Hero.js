import "./Hero.css";

export default function Hero() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Your Digital Transformation Journey Begins Now</h1>

          <p>
            We provide engineering and digital services to help your
            business scale smarter.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <div className="services-container">
          <div className="service">
            <h2>Digital Engineering</h2>
            <p>Modern scalable solutions</p>
          </div>

          <div className="service">
            <h2>Engineering Services</h2>
            <p>End-to-end product development</p>
          </div>

          <div className="service">
            <h2>Information Management</h2>
            <p>Organize and optimize data flow</p>
          </div>

          <div className="service">
            <h2>Data Management</h2>
            <p>Secure, reliable data systems</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-container">
          <h2 className="about-title">
            What is TechVan Consultations?
          </h2>

          <p className="about-text">
            TechVan Consultations is a modern digital engineering and consulting
            firm focused on helping businesses scale through technology.
          </p>

          <p className="about-text">
            From full-stack development to cloud solutions, we help companies
            build faster, smarter, and more efficiently.
          </p>
        </div>
      </section>
    </div>
  );
}