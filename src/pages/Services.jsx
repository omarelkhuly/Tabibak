import React from 'react';
import ServicesComponent from "../components/Services/Services";
import { useTranslation } from "react-i18next";
import "./servicesStyle.css";

const Services = () => {
    const { t } = useTranslation();

    return (
        <div className="services-page">

            {/* Hero Section */}
            <div className="services-hero">
                <div className="services-overlay">
                    <h1>{t("services.title")}</h1>
                    <p>{t("services.subtitle")}</p>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-content">
                <ServicesComponent />
            </div>

        </div>
    );
}

export default Services;