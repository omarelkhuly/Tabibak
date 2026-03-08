import React from 'react';
import ServicesComponent from "../components/Services/Services";
import "./servicesStyle.css";
const Services = () => {
    return (
        <div className="services-page">

            {/* Hero Section */}
            <div className="services-hero">
                <div className="services-overlay">
                    <h1>خدماتنا الطبية</h1>
                    <p>حلول متكاملة لإدارة المستشفيات والعيادات والمنشآت الطبية</p>
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