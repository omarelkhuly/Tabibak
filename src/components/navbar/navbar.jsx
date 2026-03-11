// src/components/navbar/navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faGlobe,
  faRightToBracket,
  faUserPlus,
  faBars,
  faX
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {

  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Language Toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Handle link click (Mobile)
  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled shrink" : ""}`}>
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img className="imgLogo" src={logo} alt="Tabibak Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>

          <NavLink to="/" onClick={handleLinkClick}>{t("nav.home")}</NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>{t("nav.about")}</NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>{t("nav.services")}</NavLink>
          <NavLink to="/blogs" onClick={handleLinkClick}>{t("nav.blogs")}</NavLink>
          <NavLink to="/faq" onClick={handleLinkClick}>{t("nav.faq")}</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>{t("nav.contact")}</NavLink>

          {/* Desktop Actions */}
          <div className="nav-actions desktop-only">
            <button className="icon-btn" onClick={toggleLanguage}>
              <FontAwesomeIcon icon={faGlobe} /> {i18n.language.toUpperCase()}
            </button>

            <button className="icon-btn" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <Link to="/login" className="login-btn" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faRightToBracket} /> {t("nav.login")}
            </Link>

            <Link to="/register" className="register-btn" onClick={handleLinkClick}>
              {t("nav.register")}
            </Link>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="nav-actions mobile-only">

          <button className="icon-btn" onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faGlobe} />
          </button>

          <button className="icon-btn" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          <Link to="/login" className="login-btn" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>

          <Link to="/register" className="register-btn" onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faX : faBars} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;