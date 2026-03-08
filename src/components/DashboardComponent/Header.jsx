// src/components/DashboardComponent/Header.jsx

import React, { useState, useEffect } from "react";

const Header = ({ handleLogout }) => {

  const [lang, setLang] = useState("AR");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  // تغيير اللغة
  const toggleLanguage = () => {
    const newLang = lang === "AR" ? "EN" : "AR";

    setLang(newLang);
    document.documentElement.dir = newLang === "AR" ? "rtl" : "ltr";
  };

  // تغيير الإضاءة
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <header className="dashboard-header">

      <div className="header-right">

        {/* Language */}
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