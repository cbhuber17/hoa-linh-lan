import { useState } from "react";
import "./Navbar.scss";
import MobileNav from "./MobileNav";
import { scrollToSection } from "../utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <a onClick={() => scrollToSection("home")}>Hoa Linh Lan</a>
        </div>
        <ul className="navbar__links">
          <li>
            <a onClick={() => scrollToSection("best-flowers")}>Hoa đẹp nhất</a>
          </li>
          <li className="navbar__links__gallery">
            <a onClick={() => scrollToSection("gallery")}>Phòng trưng bày</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Liên hệ</a>
          </li>
        </ul>
        <div className="navbar__hamburger" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <MobileNav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
