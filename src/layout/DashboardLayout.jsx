// src/layout/DashboardLayout.jsx

import React, { useState } from "react";
import Content from "../components/DashboardComponent/Content";
import Sidebar from "../components/DashboardComponent/Sidebar";
import Header from "../components/DashboardComponent/Header";

import "../assets/dashboard.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="dashboard-main">
        <Header handleLogout={handleLogout} />
        <div className="dashboard-content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;