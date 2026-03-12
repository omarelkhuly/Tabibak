// src/pages/dashboard/doctorSteps/StepDocumentsDoctor.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./DoctorSteps.css";

const documentsList = ["medical_license", "national_id", "insurance"];

const StepDocumentsDoctor = ({ data, setData }) => {
    const { t } = useTranslation();

    const [files, setFiles] = useState(data.documents || {});

    const handleFile = (type, file) => {
        if (!file) return;

        setFiles((prev) => ({
            ...prev,
            [type]: file
        }));
    };

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            documents: files
        }));
    }, [files, setData]);

    return (
        <div className="doctor-step">

            <div className="documents-grid">

                {documentsList.map((doc) => (
                    <label className="file-upload" key={doc}>

                        <span className="doc-title">
                            {t(`doctor.add.${doc}`)}
                        </span>

                        <input
                            type="file"
                            onChange={(e) => handleFile(doc, e.target.files[0])}
                        />

                        <span className="upload-btn">
                            {t("common.ChooseFile")}
                        </span>

                        {files[doc] && (
                            <span className="file-name">
                                {files[doc].name}
                            </span>
                        )}

                    </label>
                ))}

            </div>

        </div>
    );
};

export default StepDocumentsDoctor;