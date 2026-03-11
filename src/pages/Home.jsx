// src/pages/Home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import About from "../components/About/about.jsx";
import Specialties from "../components/Specialties/Specialties";
import ContactUs from "../components/ContactUs/ContactUs";
import Features from "../components/Features/Features";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* HERO */}
      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            {t("home.heroTitle")}
          </h1>

          <p>
            {t("home.heroDesc")}
          </p>

          <button className="read-more-btn"
            onClick={() => navigate("/registration-guide")}>
            {t("common.getStarted")}
          </button>

        </div>

      </section>

      <About />

      <Specialties />

      <div className="contact-page">
        <div className="contact-overlay">
          <ContactUs />
        </div>
      </div>

      <Features />

    </>
  );
};

export default Home;