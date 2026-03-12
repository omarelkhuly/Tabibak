// src/pages/dashboard/CreateFacility.jsx
import React, { useState } from "react";
import StepBasic from "./facilitySteps/StepBasic";
import StepLicense from "./facilitySteps/StepLicense";
import StepDocuments from "./facilitySteps/StepDocuments";
import StepReview from "./facilitySteps/StepReview";
import { useTranslation } from "react-i18next";
import "./CreateFacility.css";

const CreateFacility = () => {

    const { t } = useTranslation();

    const steps = [
        { component: StepBasic, title: t("dashboard.steps.basic") },
        { component: StepLicense, title: t("dashboard.steps.license") },
        { component: StepDocuments, title: t("dashboard.steps.documents") },
        { component: StepReview, title: t("dashboard.steps.review") },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [facilityData, setFacilityData] = useState({});

    const StepComponent = steps[currentStep].component;

    const nextStep = () =>
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

    const prevStep = () =>
        setCurrentStep((prev) => Math.max(prev - 1, 0));

    return (
        <div className="create-facility-page">
            <h2 className="address_step">{steps[currentStep].title}</h2>
            <StepComponent data={facilityData} setData={setFacilityData} />
            <div className="step-buttons">
                {currentStep < steps.length - 1 && <button onClick={nextStep}>{t("dashboard.steps.Next")}</button>}
                {currentStep > 0 && <button onClick={prevStep}>{t("dashboard.steps.Back")}</button>}
            </div>
        </div>
    );
};

export default CreateFacility;