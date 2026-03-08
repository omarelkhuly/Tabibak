// src/components/navbar/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faGlobe,
  faRightToBracket,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png"; // تأكد من مسار اللوجو
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"; // Mobile menu
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Language Toggle + RTL
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled shrink" : ""}`}>
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img className="imgLogo" src={logo} alt="Tabibak Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* Desktop Actions: يظهر كامل */}
          <div className="nav-actions desktop-only">
            <button className="icon-btn" onClick={toggleLanguage}>
              <FontAwesomeIcon icon={faGlobe} /> {language.toUpperCase()}
            </button>

            <button className="icon-btn" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <Link to="/login" className="login-btn">
              <FontAwesomeIcon icon={faRightToBracket} /> Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Actions: أيقونات فقط، خارج القائمة */}
        <div className="nav-actions mobile-only">
          <button className="icon-btn" onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faGlobe} />
          </button>

          <button className="icon-btn" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          {/* Login */}
          <Link to="/login" className="login-btn">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>

          {/* Register */}
          <Link to="/register" className="register-btn">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faX : faBars} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;