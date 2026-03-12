// src/pages/dashboard/facilitySteps/StepDocuments.jsx
import React, { useState } from "react";
import { uploadDocumentApi } from "../../../api/facilityApi";
import { useNotification } from "../../../context/NotificationContext";
import { useTranslation } from "react-i18next";
import "./StepDocuments.css";

const documentsList = [
    "commercial_register",
    "national_id",
    "medical_license",
    "hospital_license",
    "clinic_license",
    "insurance",
    "experience_certificate",
    "medical_degree"
];

const StepDocuments = ({ data, setData }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [files, setFiles] = useState({});

    const handleFile = (type, file) => {
        setFiles(prev => ({
            ...prev,
            [type]: file
        }));
    };

    const uploadFile = async (type) => {
        const formData = new FormData();
        formData.append("file", files[type]);
        formData.append("type", type);

        try {
            await uploadDocumentApi(formData);

            showNotification("success", t("stepDocuments.uploaded"));

            // تحديث البيانات الأساسية
            setData(prev => ({
                ...prev,
                documents: [...(prev.documents || []), files[type]]
            }));

        } catch (error) {
            console.error(error);
            showNotification("error", t("stepDocuments.failedUpload"));
        }
    };

    const saveStep = () => {
        // تحقق من وجود ملفات على الأقل
        const uploaded = Object.keys(files).filter(k => files[k]);
        if (uploaded.length === 0) {
            showNotification("error", t("stepDocuments.fillRequired"));
            return;
        }
        setData(prev => ({
            ...prev,
            documents: uploaded.map(k => files[k])
        }));
        showNotification("success", t("stepDocuments.saved"));
    };

    return (
        <div className="documents-step">

            <div className="documents-grid">
                {documentsList.map(doc => (
                    <div key={doc} className="document-card">
                        <p>{t(`stepDocuments.${doc}`)}</p>

                        <label className="file-upload">
                            <input
                                type="file"
                                onChange={(e) => handleFile(doc, e.target.files[0])}
                            />

                            <span className="upload-btn">
                              { t("common.ChooseFile")}
                            </span>

                            {files[doc] && (
                                <span className="file-name">
                                    {files[doc].name}
                                </span>
                            )}
                        </label>

                        {files[doc] && (
                            <div className="doc-preview">
                                {files[doc].name}
                                <button onClick={() => uploadFile(doc)}>
                                    {t("stepDocuments.upload")}
                                </button>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <button className="save-step-btn" onClick={saveStep}>
                {t("stepDocuments.saveStep")}
            </button>
        </div>
    );
};

export default StepDocuments;