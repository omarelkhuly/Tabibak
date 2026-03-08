// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/DashboardComponent/Sidebar";
import Header from "../components/DashboardComponent/Header";
import Content from "../components/DashboardComponent/Content";
import "../assets/dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/Register";
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="main-content">
        <Header handleLogout={handleLogout} />
        <Content />
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className="toggle-btn-global"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "«" : "»"}
      </button>
    </div>
  );
};

export default Dashboard;