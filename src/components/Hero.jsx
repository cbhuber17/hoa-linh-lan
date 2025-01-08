import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__content__title">Welcome to Hoa Linh Lan</h1>
        <p className="hero__content__subtitle">
          Stunning flower arrangements for every occasion.
        </p>
        <button className="hero__content__cta">View Flower Bouquets</button>
      </div>
    </section>
  );
};

export default Hero;
