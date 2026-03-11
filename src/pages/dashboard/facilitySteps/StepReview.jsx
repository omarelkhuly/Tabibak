// src/pages/dashboard/facilitySteps/StepReview.jsx
// src/pages/dashboard/facilitySteps/StepReview.jsx
import React from "react";
import  {useNotification}   from "../../../context/NotificationContext";
import { useTranslation } from "react-i18next";
import "./StepReview.css";

const StepReview = ({ data }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const saveStep = () => {
        if (!data.name_ar || !data.email) {
            showNotification("error", t("dashboard.stepReview.fillRequired"));
            return;
        }
        showNotification("success", t("dashboard.stepReview.saved"));
    };

    return (
        <div className="step-review">
            <h3>{t("dashboard.stepReview.title")}</h3>

            <div className="review-item">
                <strong>{t("dashboard.stepReview.name")}:</strong> {data.name_ar}
            </div>
            <div className="review-item">
                <strong>{t("dashboard.stepReview.email")}:</strong> {data.email}
            </div>
            <div className="review-item">
                <strong>{t("dashboard.stepReview.phone")}:</strong> {data.phone}
            </div>
            <div className="review-item">
                <strong>{t("dashboard.stepReview.licenseNumber")}:</strong> {data.license_number}
            </div>
            <div className="review-item">
                <strong>{t("dashboard.stepReview.subscriptionExpiry")}:</strong> {data.subscription_expiry}
            </div>
            <div className="review-item">
                <strong>{t("dashboard.stepReview.documents")}:</strong>
                <ul>
                    {data.documents && data.documents.map((f, idx) => <li key={idx}>{f.name}</li>)}
                </ul>
            </div>

            <button className="save-step-btn" onClick={saveStep}>
                {t("dashboard.stepReview.saveStep")}
            </button>
        </div>
    );
};

export default StepReview;