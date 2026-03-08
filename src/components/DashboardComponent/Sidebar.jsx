// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  return (
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
  );
};

export default Sidebar;