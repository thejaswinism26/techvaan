import "./Industries.css";

export default function Industries() {
  const industries = [
    {
      title: "Oil & Gas",
      image: "/images/oil-gas.jpg",
    },
    {
      title: "Petrochemicals",
      image: "/images/petrochemicals.jpg",
    },
    {
      title: "Food & Beverage",
      image: "/images/food.jpg",
    },
    {
      title: "Power & Utilities",
      image: "/images/power.jpg",
    },
    {
      title: "Shipping",
      image: "/images/shipping.jpg",
    },
    {
      title: "Chemicals",
      image: "/images/chemicals.jpg",
    },
  ];

  return (
    <section className="industries">
      <div className="industries-header">
        <h1>Industries</h1>
        <p>
          Go digital.<br /> Lead your industry.<br /> We transform businesses across sectors.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div key={index} className="industry-card">
            <img src={item.image} alt={item.title} />

            <div className="industry-overlay">
              <h3>{item.title}</h3>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}