import React, { useState, useEffect } from "react";
import styles from "./header.module.css"; // Import corresponding CSS module
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeSection, setActiveSection] = useState("#banner");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 50; // Adjust based on your header height

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close the menu when a link is clicked
    document.querySelector(section).scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${
        activeSection !== "#banner" ? styles.blackBackground : ""
      }`}
    >
      <nav className={styles.navbar}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          id="nav"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <li className={activeSection === "#banner" ? styles.active : ""}>
            <a
              className="smoothscroll"
              href="#banner"
              onClick={() => handleSetActive("#banner")}
            >
              Home
            </a>
          </li>
          <li className={activeSection === "#about" ? styles.active : ""}>
            <a
              className="smoothscroll"
              href="#about"
              onClick={() => handleSetActive("#about")}
            >
              About
            </a>
          </li>
          <li className={activeSection === "#service" ? styles.active : ""}>
            <a
              className="smoothscroll"
              href="#service"
              onClick={() => handleSetActive("#service")}
            >
              Service
            </a>
          </li>
          <li className={activeSection === "#Works" ? styles.active : ""}>
            <a
              className="smoothscroll"
              href="#Works"
              onClick={() => handleSetActive("#Works")}
            >
              Works
            </a>
          </li>
          <li className={activeSection === "#contact" ? styles.active : ""}>
            <a
              className="smoothscroll"
              href="#contact"
              onClick={() => handleSetActive("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
