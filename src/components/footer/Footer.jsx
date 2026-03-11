// src/components/footer/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";

import {
  faHospital,
  faUserDoctor,
  faCalendarCheck,
  faFileShield,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - About */}
        <div className="footer-col">
          <img className="imgLogo" src={logo} alt="Tabibak Logo" />

          <p>{t("footer.aboutText")}</p>

          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>{t("footer.dashboardServices")}</h4>

          <ul>
            <li><FontAwesomeIcon icon={faHospital} /> {t("footer.facilities")}</li>
            <li><FontAwesomeIcon icon={faUserDoctor} /> {t("footer.doctors")}</li>
            <li><FontAwesomeIcon icon={faCalendarCheck} /> {t("footer.appointments")}</li>
            <li><FontAwesomeIcon icon={faFileShield} /> {t("footer.documents")}</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>{t("footer.quickLinks")}</h4>

          <ul>
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/about">{t("nav.about")}</Link></li>
            <li><Link to="/services">{t("nav.services")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>{t("footer.newsletterTitle")}</h4>

          <div className="newsletter">
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
            />

            <button>{t("footer.subscribe")}</button>
          </div>

          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> info@med.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +20 100 000 0000</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> Cairo, Egypt</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MedPlatform. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;