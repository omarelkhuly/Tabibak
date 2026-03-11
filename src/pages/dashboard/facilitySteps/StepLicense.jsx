// src/pages/dashboard/facilitySteps/StepLicense.jsx

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import  {useNotification}   from "../../../context/NotificationContext";
import "./StepLicense.css";

const StepLicense = ({ data, setData }) => {

    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [form, setForm] = useState({
        license_number: data.license_number || "",
        commercial_register: data.commercial_register || "",
        tax_number: data.tax_number || "",
        subscription_expiry: data.subscription_expiry || "",
        status: data.status || "active"
    });

    useEffect(() => {
        setData(prev => ({ ...prev, ...form }));
    }, [form]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const saveStep = () => {
        if (!form.license_number || !form.commercial_register) {
            showNotification("error", t("dashboard.stepLicense.fillRequired"));
            return;
        }
        setData(prev => ({ ...prev, ...form }));
        showNotification("success", t("dashboard.stepLicense.saved"));
    };

    return (
        <div className="step-license">
            <div className="form-grid">

                <input
                    name="license_number"
                    placeholder={t("dashboard.stepLicense.licenseNumber")}
                    value={form.license_number}
                    onChange={handleChange}
                />

                <input
                    name="commercial_register"
                    placeholder={t("dashboard.stepLicense.commercialRegister")}
                    value={form.commercial_register}
                    onChange={handleChange}
                />

                <input
                    name="tax_number"
                    placeholder={t("dashboard.stepLicense.taxNumber")}
                    value={form.tax_number}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="subscription_expiry"
                    value={form.subscription_expiry}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="active">{t("dashboard.stepLicense.active")}</option>
                    <option value="inactive">{t("dashboard.stepLicense.inactive")}</option>
                </select>

            </div>

            <button className="save-step-btn" onClick={saveStep}>
                {t("dashboard.stepLicense.saveStep")}
            </button>
        </div>
    );
};

export default StepLicense;