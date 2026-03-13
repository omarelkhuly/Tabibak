// src/components/Content.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardHome from "@/pages/dashboard/DashboardHome";
import DashboardProfile from "@/pages/dashboard/DashboardProfile";
import Facilities from "@/pages/dashboard/Facilities";
import Doctors from "@/pages/dashboard/Doctors";
import CreateFacility from "@/pages/dashboard/CreateFacility";
import AddDoctorWizard from "@/pages/dashboard/AddDoctorWizard";
import DoctorDetails from "@/pages/dashboard/DoctorDetails";

const Content = () => {
  return (
    <Routes>
      <Route index element={<DashboardHome />} />
      <Route path="profile" element={<DashboardProfile />} />
      <Route path="facilities" element={<Facilities />} />
      <Route path="facilities/create" element={<CreateFacility />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="doctors/add" element={<AddDoctorWizard />} />
      <Route path="doctors/:id" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Content;