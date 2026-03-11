// src/components/DashboardComponent/Header.jsx

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ handleLogout }) => {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // ضبط الاتجاه حسب اللغة عند التحميل
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // تغيير اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // تغيير الوضع الليلي
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <header className="dashboard-header">
      <div className="header-right">

        {/* Language Toggle */}
        <button className="icon-btn" onClick={toggleLanguage} title="Language">
          🌐
        </button>

        {/* Dark Mode */}
        <button className="icon-btn" onClick={toggleDarkMode} title="Theme">
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Logout */}
        <button className="icon-btn logout-icon" onClick={handleLogout} title="Logout">
          🚪
        </button>

      </div>
    </header>
  );
};

export default Header;