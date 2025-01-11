import Button from "./Button";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__content__title">404</h1>
        <p className="not-found__content__subtitle">
          Apologies for the inconvenience.
        </p>
        <p className="not-found__content__description">
          It seems you’ve encountered a 404 error, and our enchanting flowers
          are temporarily out of reach. We’re already working on restoring our
          website so you can once again enjoy their beauty. Thank you for your
          patience and understanding.
        </p>
        <a href="/">
          <Button message="Back to the homepage" />
        </a>
      </div>
      <div className="not-found__image">
        <img
          src="/hoa-linh-lan//src/assets/Hero3.png"
          alt="Bouquet of flowers"
        />
      </div>
    </section>
  );
};

export default NotFound;
