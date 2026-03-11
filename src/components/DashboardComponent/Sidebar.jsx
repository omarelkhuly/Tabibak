// src/components/DashboardComponent/Sidebar.jsx
// src/components/DashboardComponent/Sidebar.jsx
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/dashboard.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);

  const menuItems = [
    {
      path: "/dashboard",
      label: t("sidebar.home"),
      icon: "🏠",
    },
    {
      path: "/dashboard/profile",
      label: t("sidebar.profile"),
      icon: "👤",
    },
    {
      path: "/dashboard/facilities",
      label: t("sidebar.facilities"),
      icon: "🏥",
    },
  ];

  return (
    <>
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-header">
          <h2 className="logo">
            {sidebarOpen ? t("sidebar.dashboard") : "DB"}
          </h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-icon">{item.icon}</span>

              {sidebarOpen && (
                <span className="nav-text">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Toggle Button */}
      <button
        className={sidebarOpen ? "toggle-btn open" : "toggle-btn"}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "❮" : "❯"}
      </button>
    </>
  );
};

export default Sidebar;