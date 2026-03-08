// src/components/Sidebar.jsx

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

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

  return (
    <>
      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>

        <div className="sidebar-header">
          <h2 className="logo">{sidebarOpen ? "Dashboard" : "DB"}</h2>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="profile" className="nav-link">
            Profile
          </NavLink>
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