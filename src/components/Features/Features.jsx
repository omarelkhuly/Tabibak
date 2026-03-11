// src/components/Features/Features.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";

import "./features.css";

import { useTranslation } from "react-i18next";

import { FaUserShield, FaClock, FaStar, FaShieldAlt, FaHeart } from "react-icons/fa";

const Features = ({ overlay = false }) => {

  const { t } = useTranslation();

  const featuresData = [
    {
      icon: <FaUserShield />,
      title: t("features.securityTitle"),
      desc: t("features.securityDesc")
    },
    {
      icon: <FaClock />,
      title: t("features.timeTitle"),
      desc: t("features.timeDesc")
    },
    {
      icon: <FaStar />,
      title: t("features.qualityTitle"),
      desc: t("features.qualityDesc")
    },
    {
      icon: <FaShieldAlt />,
      title: t("features.verifyTitle"),
      desc: t("features.verifyDesc")
    },
    {
      icon: <FaHeart />,
      title: t("features.careTitle"),
      desc: t("features.careDesc")
    }
  ];

  const isRTL = document.documentElement.dir === "rtl";

  return (
    <section className={`features-section ${overlay ? "with-overlay" : ""}`}>

      {overlay && <div className="features-overlay"></div>}

      <h2 className="features-title">
        {t("features.title")}
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={25}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1400: { slidesPerView: 5 }
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >

        {featuresData.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="feature-card">

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default Features;