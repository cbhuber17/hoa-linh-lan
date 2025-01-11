import React from "react";
import "./MobileNav.scss";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <div className="mobile-nav__overlay" onClick={onClose}></div>
      <div className="mobile-nav__content">
        <h1 className="mobile-nav__content__header">Điều Hướng Trang</h1>
        <ul>
          <li onClick={onClose}>
            <a href="#best-flowers">Hoa đẹp nhất</a>
          </li>
          {/* <li onClick={onClose}>
            <a href="#gallery">Phòng trưng bày</a>
          </li> */}
          <li onClick={onClose}>
            <a href="#contact">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;