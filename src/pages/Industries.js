import "./Industries.css";

export default function Industries() {
  const industries = [
  {
    title: "Oil & Gas",
    image: process.env.PUBLIC_URL + "/images/oil-gas.jpg",
  },
  {
    title: "Petrochemicals",
    image: process.env.PUBLIC_URL + "/images/petrochemicals.jpg",
  },
  {
    title: "Food & Beverage",
    image: process.env.PUBLIC_URL + "/images/food.jpg",
  },
  {
    title: "Power & Utilities",
    image: process.env.PUBLIC_URL + "/images/power.jpg",
  },
  {
    title: "Shipping",
    image: process.env.PUBLIC_URL + "/images/shipping.jpg",
  },
  {
    title: "Chemicals",
    image: process.env.PUBLIC_URL + "/images/chemicals.jpg",
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