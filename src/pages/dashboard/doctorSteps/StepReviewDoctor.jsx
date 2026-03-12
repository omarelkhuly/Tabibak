// src/pages/dashboard/doctorSteps/StepReviewDoctor.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../../context/NotificationContext";
import { createDoctorApi } from "../../../api/doctorApi";
import { uploadDoctorDocumentApi } from "../../../api/doctorDocumentsApi";
import "./DoctorSteps.css";

const StepReviewDoctor = ({ data }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        try {
            setLoading(true);

            // 1️⃣ إنشاء الطبيب
            const res = await createDoctorApi({
                name: data.name,
                email: data.email,
                phone: data.phone,
                specialty: data.specialty
            });

            if (!res?.status) {
                showNotification("error", t("doctor.add.failed"));
                return;
            }

            const doctorId = res?.data?.id;

            if (!doctorId) {
                showNotification("error", "Doctor ID not returned");
                return;
            }

            // 2️⃣ رفع المستندات
            if (data.documents) {
                for (const [type, file] of Object.entries(data.documents)) {
                    if (!file) continue;

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("type", type);

                    await uploadDoctorDocumentApi(doctorId, formData);
                }
            }

            showNotification("success", t("doctor.add.success"));

        } catch (error) {
            console.error(error);
            showNotification("error", t("doctor.add.failed"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="doctor-step">

            <h3>{t("doctor.add.review")}</h3>

            <div className="review-card">

                <div className="review-row">
                    <strong>{t("doctor.add.name")}:</strong>
                    <span>{data?.name}</span>
                </div>

                <div className="review-row">
                    <strong>{t("doctor.add.email")}:</strong>
                    <span>{data?.email}</span>
                </div>

                <div className="review-row">
                    <strong>{t("doctor.add.phone")}:</strong>
                    <span>{data?.phone}</span>
                </div>

                <div className="review-row">
                    <strong>{t("doctor.add.specialty")}:</strong>
                    <span>{data?.specialty}</span>
                </div>

                <div className="review-docs">
                    <strong>{t("doctor.add.documents")}:</strong>

                    <ul>
                        {data?.documents &&
                            Object.entries(data.documents).map(([type, file]) => (
                                <li key={type}>
                                    {t(`doctor.add.${type}`)} : {file?.name}
                                </li>
                            ))}
                    </ul>
                </div>

            </div>

            <button
                className="save-doctor-btn"
                onClick={handleSave}
                disabled={loading}
            >
                {loading ? t("common.saving") : t("common.save")}
            </button>

        </div>
    );
};

export default StepReviewDoctor;