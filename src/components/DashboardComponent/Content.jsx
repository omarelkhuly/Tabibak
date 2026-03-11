// src/components/Content.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardHome from "@/pages/dashboard/DashboardHome";
import DashboardProfile from "@/pages/dashboard/DashboardProfile";
import Facilities from "@/pages/dashboard/Facilities";
import CreateFacility from "@/pages/dashboard/CreateFacility";

const Content = () => {
  return (
    <Routes>
      <Route index element={<DashboardHome />} />
      <Route path="profile" element={<DashboardProfile />} />
      <Route path="facilities" element={<Facilities />} />
      <Route path="facilities/create" element={<CreateFacility />} />
    </Routes>
  );
};

export default Content;