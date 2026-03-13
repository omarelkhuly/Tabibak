// src/pages/dashboard/doctorSteps/StepDocumentsDoctor.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../../context/NotificationContext";
import { uploadDoctorDocumentApi } from "../../../api/doctorDocumentsApi";
import "./DoctorSteps.css";

const documentsList = ["medical_license", "national_id", "insurance"];

const StepDocumentsDoctor = ({ data, setData, doctorId }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [files, setFiles] = useState(data.documents || {});

    const handleFile = (type, file) => {
        if (!file) return;

        setFiles((prev) => ({ ...prev, [type]: file }));
    };

    useEffect(() => {
        setData((prev) => ({ ...prev, documents: files }));
    }, [files, setData]);

    const handleSave = async () => {
        if (!doctorId) {
            showNotification("error", t("doctor.add.saveDocumentsAfterCreating"));
            return;
        }

        // تحقق من وجود ملفات جديدة قبل رفعها
        if (!files || Object.keys(files).length === 0) {
            showNotification(
                "error",
                "Some of the files which you uploaded before have expired. Please upload the files again to save."
            );
            return;
        }

        try {
            for (const [type, file] of Object.entries(files)) {
                if (!file) continue;

                // تحقق من نوع الملف
                const allowedTypes = ["pdf", "jpg", "jpeg", "png"];
                const ext = file.name.split(".").pop().toLowerCase();
                if (!allowedTypes.includes(ext)) {
                    showNotification("error", `Invalid file type for ${type}: ${file.name}`);
                    continue;
                }

                const formData = new FormData();
                formData.append("file", file);
                formData.append("type", type);

                console.log(`Uploading document: type=${type}, name=${file.name}, size=${file.size}`);
                await uploadDoctorDocumentApi(doctorId, formData);
            }

            showNotification("success", t("dashboard.steps.saved"));
        } catch (error) {
            console.error("StepDocuments save error:", error);
            showNotification("error", t("dashboard.steps.failed"));
        }
    };

    return (
        <div className="doctor-step">
            <div className="documents-grid">
                {documentsList.map((doc) => (
                    <label className="file-upload" key={doc}>
                        <span className="doc-title">{t(`doctor.add.${doc}`)}</span>
                        <input type="file" onChange={(e) => handleFile(doc, e.target.files[0])} />
                        <span className="upload-btn">{t("common.ChooseFile")}</span>
                        {files[doc] && <span className="file-name">{files[doc].name}</span>}
                    </label>
                ))}
            </div>

            <button className="save-step-btn" onClick={handleSave}>
                {t("common.save")}
            </button>
        </div>
    );
};

export default StepDocumentsDoctor;