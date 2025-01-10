import Button from "./Button";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__form">
        <h2 className="contact__heading">Liên Hệ Với Tôi</h2>
        <form>
          <div className="contact__field">
            <label className="contact__field__label" htmlFor="name">
              Tên:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact__field__input"
            />
          </div>

          <div className="contact__field">
            <label className="contact__field__label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact__field__input"
            />
          </div>

          <div className="contact__field">
            <label className="contact__field__label" htmlFor="phone">
              Số Điện Thoại:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="contact__field__input"
            />
          </div>

          <div className="contact__field" style={{ border: "none" }}>
            <label className="contact__field__label" htmlFor="message">
              Tin Nhắn:
            </label>
            <textarea
              id="message"
              name="message"
              className="contact__field__textarea"
              placeholder="Viết tin nhắn..."
            ></textarea>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Button message="Gửi" />
          </div>
        </form>
      </div>

      <div className="contact__image">
        <picture>
          <source
            srcSet="/hoa-linh-lan/Hero2.jpg"
            media="(max-width: 1024px)"
          />
          <img
            src="/hoa-linh-lan/Hero4.png"
            alt="Hero4"
            className="contact__image__fallback-image"
          />
        </picture>
      </div>
    </section>
  );
};

export default Contact;
