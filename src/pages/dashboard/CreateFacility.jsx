// src/pages/dashboard/CreateFacility.jsx
import React, { useState } from "react";
import StepBasic from "./facilitySteps/StepBasic";
import StepLicense from "./facilitySteps/StepLicense";
import StepDocuments from "./facilitySteps/StepDocuments";
import StepReview from "./facilitySteps/StepReview";
import "./CreateFacility.css";

const steps = [
    { component: StepBasic, title: "Step 1" },
    { component: StepLicense, title: "Step 2" },
    { component: StepDocuments, title: "Step 3" },
    { component: StepReview, title: "Step 4" },
];

const CreateFacility = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [facilityData, setFacilityData] = useState({});

    const StepComponent = steps[currentStep].component;

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="create-facility-page">
            <h2>{steps[currentStep].title}</h2>
            <StepComponent data={facilityData} setData={setFacilityData} />
            <div className="step-buttons">
                {currentStep > 0 && <button onClick={prevStep}>Back</button>}
                {currentStep < steps.length - 1 && <button onClick={nextStep}>Next</button>}
            </div>
        </div>
    );
};

export default CreateFacility;