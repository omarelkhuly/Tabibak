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

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="dashboard-main">

        {/* Header */}
        <Header handleLogout={handleLogout} />

        {/* Pages */}
        <div className="dashboard-content">
          <Content />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;