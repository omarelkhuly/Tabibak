// src/components/Services/Services.jsx
import React from "react";
import "./services.css";

import {
  FaHospital,
  FaClinicMedical,
  FaUserMd,
  FaCalendarCheck,
  FaUsers,
  FaFileMedical
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaHospital />,
    title: "إنشاء منشآت طبية",
    desc: "إدارة وتشغيل المستشفيات والمنشآت الطبية الكبيرة بطريقة ذكية وسهلة."
  },
  {
    icon: <FaClinicMedical />,
    title: "مجمع عيادات طبية",
    desc: "إدارة مجمعات العيادات وتنظيم الأقسام والتخصصات المختلفة."
  },
  {
    icon: <FaUserMd />,
    title: "عيادات خاصة",
    desc: "نظام متكامل لإدارة العيادات الخاصة للأطباء وتنظيم العمل اليومي."
  },
  {
    icon: <FaCalendarCheck />,
    title: "تنظيم مواعيد الأطباء",
    desc: "إدارة جداول الأطباء وتنظيم المواعيد مع المرضى بسهولة."
  },
  {
    icon: <FaUsers />,
    title: "إدارة حجوزات المرضى",
    desc: "متابعة الحجوزات والتأكيد والتنظيم بشكل احترافي."
  },
  {
    icon: <FaFileMedical />,
    title: "التحقق من الأوراق الطبية",
    desc: "مراجعة والتحقق من أوراق المنشآت والعيادات لضمان الجودة."
  }
];

const ServicesComponent = () => {
  return (
    <section className="services">
      
      <div className="services-header">
        <h2>خدماتنا</h2>
        <p>نقدم حلولاً متكاملة لإدارة المنشآت الطبية والعيادات بسهولة وكفاءة</p>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesComponent;