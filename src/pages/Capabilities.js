// Capabilities.js
import "./Capabilities.css";

export default function Capabilities() {
  const services = [
    {
      title: "Digital Engineering",
      image: "/images/digital-engineering.jpg",
      description:
        "We redefine engineering through a fully digital, model-centric approach that enables intelligent design, seamless execution, and optimized asset performance.",
    },
    {
      title: "Engineering Services",
      image: "/images/engineering-services.jpg",
      description:
        "We provide world-class, multidisciplinary engineering services for complex and mission-critical projects across all lifecycle stages.",
    },
    {
      title: "Information Management",
      image: "/images/information-management.jpg",
      description:
        "We establish a trusted foundation for decision-making through enterprise-grade information management and governance.",
    },
    {
      title: "Data Management & Software Development",
      image: "/images/data-management.jpg",
      description:
        "We transform complex data landscapes into strategic advantage through scalable platforms and custom software solutions.",
    },
  ];

  return (
    <section className="capabilities">
      <div className="capabilities-header">
        <h1>Capabilities</h1>
        <p>Data • Engineering • Consulting • AI</p>
      </div>

      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

