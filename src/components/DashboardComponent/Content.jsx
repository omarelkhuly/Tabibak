// src/components/Content.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../../pages/dashboard/DashboardHome";
import DashboardProfile from "../../pages/dashboard/DashboardProfile";

const Content = () => {
  return (
    <div className="dashboard-pages">
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="DashboardProfile" element={<DashboardProfile />} />
      </Routes>
    </div>
  );
};

export default Content;