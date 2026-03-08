// src/components/footer/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png"; // تأكد من مسار اللوجو
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
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - About */}
        <div className="footer-col">
          <img className="imgLogo" src={logo} alt="Tabibak Logo" />
          <p>
            منصة متكاملة لإدارة العيادات والمستشفيات والمجمعات الطبية
            بسهولة واحترافية.
          </p>

          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        {/* Column 2 - Dashboard Services */}
        <div className="footer-col">
          <h4>خدمات لوحة التحكم</h4>
          <ul>
            <li><FontAwesomeIcon icon={faHospital} /> إدارة المنشآت</li>
            <li><FontAwesomeIcon icon={faUserDoctor} /> إدارة الأطباء</li>
            <li><FontAwesomeIcon icon={faCalendarCheck} /> تنظيم المواعيد</li>
            <li><FontAwesomeIcon icon={faFileShield} /> رفع المستندات</li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/services">الخدمات</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-col">
          <h4>اشترك في النشرة البريدية</h4>
          <div className="newsletter">
            <input type="email" placeholder="ادخل بريدك الإلكتروني" />
            <button>اشتراك</button>
          </div>

          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> info@med.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +20 100 000 0000</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> Cairo, Egypt</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MedPlatform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;