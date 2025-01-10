import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>Hoa Linh Lan</h2>
          <p>Mang đến vẻ đẹp và sự sang trọng trong từng khoảnh khắc.</p>
        </div>

        <div className="footer__links">
          <h3>Liên Kết Nhanh</h3>
          <ul>
            <li>
              <a href="#hero">Trang chủ</a>
            </li>
            <li>
              <a href="#best-flowers">Hoa đẹp nhất</a>
            </li>
            <li className="footer__links--all-flowers">
              <a href="#gallery">Tất Cả Hoa</a>
            </li>
            <li>
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Liên Hệ Với Tôi</h3>
          <p>Điện thoại: +84 915 169 616</p>
          <p>Theo dõi tôi trên:</p>
          <div className="footer__contact__socials">
            <a
              href="https://www.facebook.com/tam.ha.338211"
              target="_blank"
              rel="noreferrer"
              className="footer__contact__socials__icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.475v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.793.143v3.24h-1.916c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.734 0 1.325-.591 1.325-1.324v-21.351c0-.733-.591-1.325-1.324-1.325z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@hoalinhlan.1992"
              target="_blank"
              rel="noreferrer"
              className="footer__contact__socials__icon"
            >
              <svg
                fill="#FFFFFF"
                viewBox="0 0 512 512"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
              >
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2025 Hà Thị Tâm</p>
      </div>
    </footer>
  );
};

export default Footer;
