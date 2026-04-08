import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="home-intro">
        <h2>Unlock your data potential</h2>
        <p>
          We help businesses transform data into powerful insights and
          scalable systems.
        </p>
      </section>
    </div>
  );
}