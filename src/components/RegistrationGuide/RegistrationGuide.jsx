// src/components/RegistrationGuide/RegistrationGuide.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./registrationGuide.css";
import { useNavigate } from "react-router-dom";

const RegistrationGuide = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const steps = [
        {
            title: t("registration.steps.step1Title"),
            desc: t("registration.steps.step1Desc"),
        },
        {
            title: t("registration.steps.step2Title"),
            desc: t("registration.steps.step2Desc"),
        },
        {
            title: t("registration.steps.step3Title"),
            desc: t("registration.steps.step3Desc"),
        },
        {
            title: t("registration.steps.step4Title"),
            desc: t("registration.steps.step4Desc"),
        },
        {
            title: t("registration.steps.step5Title"),
            desc: t("registration.steps.step5Desc"),
        },
    ];

    return (
        <div className="registration-page">

            <div className="registration-header">
                <h1>{t("registration.title")}</h1>
                <p>{t("registration.subtitle")}</p>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step-card">
                        <div className="step-number">{index + 1}</div>

                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="registration-cta">
                <button className="start-btn"
                    onClick={() => navigate("/register")}>
                    {t("registration.startNow")}
                </button>
            </div>

        </div>
    );
};

export default RegistrationGuide;