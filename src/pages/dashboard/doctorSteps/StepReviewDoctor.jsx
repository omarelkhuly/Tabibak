// src/pages/dashboard/doctorSteps/StepReviewDoctor.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../../context/NotificationContext";
import { createDoctorApi } from "../../../api/doctorApi";
import { uploadDoctorDocumentApi } from "../../../api/doctorDocumentsApi";

const StepReview = ({ data }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const handleSave = async () => {
        try {
            // 1️⃣ إنشاء الطبيب
            const res = await createDoctorApi({
                name: data.name,
                email: data.email,
                phone: data.phone,
                specialty: data.specialty
            });

            if (!res.status) {
                showNotification("error", t("doctor.add.failed"));
                return;
            }

            const doctorId = res.data.id;

            // 2️⃣ رفع المستندات
            for (const [type, file] of Object.entries(data.documents || {})) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("type", type);
                await uploadDoctorDocumentApi(doctorId, formData);
            }

            showNotification("success", t("doctor.add.success"));
        } catch (error) {
            console.error(error);
            showNotification("error", t("doctor.add.failed"));
        }
    };

    return (
        <div className="step-review-doctor">
            <h3>{t("doctor.add.review")}</h3>
            <div><strong>{t("doctor.add.name")}:</strong> {data.name}</div>
            <div><strong>{t("doctor.add.email")}:</strong> {data.email}</div>
            <div><strong>{t("doctor.add.phone")}:</strong> {data.phone}</div>
            <div><strong>{t("doctor.add.specialty")}:</strong> {data.specialty}</div>
            <div>
                <strong>{t("doctor.add.documents")}:</strong>
                <ul>
                    {data.documents && Object.entries(data.documents).map(([type, f]) => (
                        <li key={type}>{t(`doctor.add.${type}`)}: {f.name}</li>
                    ))}
                </ul>
            </div>

            <button onClick={handleSave}>{t("common.save")}</button>
        </div>
    );
};

export default StepReview;