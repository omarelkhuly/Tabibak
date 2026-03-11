// src/pages/dashboard/DashboardHome.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardHome = () => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <h1>{t("dashboard.home.title")}</h1>
      <p>{t("dashboard.home.welcome")}</p>
    </div>
  );
};

export default DashboardHome;