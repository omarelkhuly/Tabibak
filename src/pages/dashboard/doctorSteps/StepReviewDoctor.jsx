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

            console.log("Creating doctor:", data);

            // 1️⃣ Create doctor
            const res = await createDoctorApi({
                name: data.name,
                email: data.email,
                phone: data.phone,
                specialty: data.specialty
            });

            console.log("Create doctor response:", res);

            if (!res || !res.status) {

                showNotification("error", t("doctor.add.failed"));
                return;

            }

            const doctorId = res?.data?.id;

            if (!doctorId) {

                console.error("Doctor ID missing:", res);

                showNotification("error", "Doctor ID not returned");

                return;

            }

            // 2️⃣ Upload documents
            if (data.documents) {

                // Map UI field names to backend expected values
                const TYPE_MAP = {
                    medical_license: "doctor_license",
                    national_id: "doctor_national_id",
                    insurance: "contract", // or "certification" based on backend agreement
                };

                for (const [type, file] of Object.entries(data.documents)) {

                    if (!file) continue;

                    const apiType = TYPE_MAP[type] || type;

                    try {

                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("type", apiType);

                        console.log("Uploading document:", type, "->", apiType);

                        await uploadDoctorDocumentApi(doctorId, formData);

                    } catch (docError) {

                        console.error("Document upload failed:", type, docError);

                    }

                }

            }

            showNotification("success", t("doctor.add.success"));

        } catch (error) {

            console.error("Create doctor error:", error.response?.data || error);

            showNotification("error", t("doctor.add.failed"));

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="doctor-step">

            <h3>{t("doctor.add.review")}</h3>

            <div className="table-scroll">

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