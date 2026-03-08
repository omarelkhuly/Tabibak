// src/components/Features/Features.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";

import "./features.css";

import { FaUserShield, FaClock, FaStar, FaShieldAlt, FaHeart } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaUserShield />,
    title: "أمان البيانات",
    desc: "نظام حماية متكامل لحفظ بيانات المرضى والمنشآت بشكل آمن."
  },
  {
    icon: <FaClock />,
    title: "تنظيم الوقت",
    desc: "إدارة مواعيد الأطباء والحجوزات بشكل دقيق ومرن."
  },
  {
    icon: <FaStar />,
    title: "جودة الخدمة",
    desc: "متابعة الأداء وضمان تقديم خدمات طبية عالية الجودة."
  },
  {
    icon: <FaShieldAlt />,
    title: "تحقق من الأوراق",
    desc: "مراجعة مستندات المنشآت والعيادات بدقة لضمان المطابقة."
  },
  {
    icon: <FaHeart />,
    title: "رعاية المرضى",
    desc: "نظام متكامل لدعم المرضى وتحسين تجربة الحجز والعناية."
  }
];

const Features = ({ overlay = false }) => {
  const isRTL = document.documentElement.dir === "rtl";

  return (
    <section className={`features-section ${overlay ? "with-overlay" : ""}`}>
      {overlay && <div className="features-overlay"></div>}

      <h2 className="features-title">مميزاتنا</h2>

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
              <div className="feature-icon">{feature.icon}</div>
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