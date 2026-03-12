// src/pages/dashboard/AddDoctorWizard.jsx
import React, { useState } from "react";
import StepBasic from "./doctorSteps/StepBasicDoctor";
import StepDocuments from "./doctorSteps/StepDocumentsDoctor";
import StepReview from "./doctorSteps/StepReviewDoctor";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../context/NotificationContext";
import './DoctorWizard.css';

const steps = [
    { component: StepBasic, titleKey: "doctor.steps.basic" },
    { component: StepDocuments, titleKey: "doctor.steps.documents" },
    { component: StepReview, titleKey: "doctor.steps.review" },
];

const AddDoctorWizard = () => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [currentStep, setCurrentStep] = useState(0);
    const [doctorData, setDoctorData] = useState({});

    const StepComponent = steps[currentStep].component;

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="add-doctor-wizard">
            <h2 className="address_step">{t(steps[currentStep].titleKey)}</h2>

            <StepComponent data={doctorData} setData={setDoctorData} />

            <div className="wizard-buttons">
                {currentStep > 0 && <button className="buttonstps" onClick={prevStep}>{t("dashboard.steps.Back")}</button>}
                {currentStep < steps.length - 1 && <button className="buttonstps" onClick={nextStep}>{t("dashboard.steps.Next")}</button>}
            </div>
        </div>
    );
};

export default AddDoctorWizard;