// src/pages/dashboard/doctorSteps/StepDocumentsDoctor.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const documentsList = ["medical_license", "national_id", "insurance"];

const StepDocuments = ({ data, setData }) => {
    const { t } = useTranslation();
    const [files, setFiles] = useState(data.documents || {});

    const handleFile = (type, file) => {
        setFiles(prev => ({ ...prev, [type]: file }));
    };

    useEffect(() => {
        setData(prev => ({ ...prev, documents: files }));
    }, [files]);

    return (
        <div className="step-documents-doctor">
            {documentsList.map(doc => (
                <label className="file-upload" key={doc}>
                    <span>{t(`doctor.add.${doc}`)}</span>
                    <input type="file" onChange={e => handleFile(doc, e.target.files[0])} />
                    <span className="upload-btn">{t("common.ChooseFile")}</span>
                    {files[doc] && <span className="file-name">{files[doc].name}</span>}
                </label>
            ))}
        </div>
    );
};

export default StepDocuments;