import Button from "../components/Button";
import { scrollToSection } from "../utils";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__content__title">Chào mừng đến với Hoa Linh Lan</h1>
        <p className="hero__content__subtitle">
          Cách cắm hoa tuyệt đẹp cho mọi dịp.
        </p>
        <a onClick={() => scrollToSection("best-flowers")}>
          <Button message="Xem bó hoa" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
