import Button from "../components/Button";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__content__title">404</h1>
        <p className="not-found__content__subtitle">
          Xin lỗi vì sự bất tiện này.
        </p>
        <p className="not-found__content__description">
          Có vẻ như bạn đã gặp phải lỗi 404 và những bông hoa mê hoặc của chúng
          tôi tạm thời nằm ngoài tầm với. Chúng tôi đang nỗ lực khôi phục trang
          web để bạn có thể một lần nữa thưởng thức vẻ đẹp của chúng. Cảm ơn bạn
          đã kiên nhẫn và hiểu biết.
        </p>
        <a href="/">
          <Button message="Quay lại trang chủ" />
        </a>
      </div>
      <div className="not-found__image">
        <img src="/hoa-linh-lan//Hero1.png" alt="Bouquet of flowers" />
      </div>
    </section>
  );
};

export default NotFound;
