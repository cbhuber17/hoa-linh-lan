import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__content__title">Chào mừng đến với Hoa Linh Lan</h1>
        <p className="hero__content__subtitle">
          Cách cắm hoa tuyệt đẹp cho mọi dịp.
        </p>
        <button className="hero__content__cta">Xem bó hoa</button>
      </div>
    </section>
  );
};

export default Hero;
