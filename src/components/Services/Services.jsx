import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";

import {
  FaHospital,
  FaClinicMedical,
  FaUserMd,
  FaCalendarCheck,
  FaUsers,
  FaFileMedical
} from "react-icons/fa";

const ServicesComponent = () => {

  const { t } = useTranslation();

  const servicesData = [
    {
      icon: <FaHospital />,
      title: t("services.hospitalTitle"),
      desc: t("services.hospitalDesc")
    },
    {
      icon: <FaClinicMedical />,
      title: t("services.clinicGroupTitle"),
      desc: t("services.clinicGroupDesc")
    },
    {
      icon: <FaUserMd />,
      title: t("services.privateClinicTitle"),
      desc: t("services.privateClinicDesc")
    },
    {
      icon: <FaCalendarCheck />,
      title: t("services.scheduleTitle"),
      desc: t("services.scheduleDesc")
    },
    {
      icon: <FaUsers />,
      title: t("services.bookingTitle"),
      desc: t("services.bookingDesc")
    },
    {
      icon: <FaFileMedical />,
      title: t("services.verifyTitle"),
      desc: t("services.verifyDesc")
    }
  ];

  return (
    <section className="services">

      <div className="services-header">
        <h2>{t("services.title")}</h2>
        <p>{t("services.subtitle")}</p>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesComponent;