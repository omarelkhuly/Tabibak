// src/pages/dashboard/facilitySteps/StepBasic.jsx

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import  {useNotification}   from "../../../context/NotificationContext";
import "./StepBasic.css";

const StepBasic = ({ data, setData }) => {

    const { t } = useTranslation();
    const { showNotification } = useNotification ();

    const [form, setForm] = useState({
        name_ar: data.name_ar || "",
        name_en: data.name_en || "",
        commercial_name: data.commercial_name || "",
        email: data.email || "",
        phone: data.phone || "",
        city: data.city || "",
        country: data.country || "",
        description: data.description || "",
        logo: null,
        cover: null
    });

    useEffect(() => {
        setData(prev => ({ ...prev, ...form }));
    }, [form]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFile = (e) => {
        const { name, files } = e.target;
        setForm({ ...form, [name]: files[0] });
    };

    const saveStep = () => {
        // تحقق من الحقول المطلوبة
        if (!form.name_ar || !form.name_en || !form.email) {
            showNotification("error", t("dashboard.stepBasic.fillRequired"));
            return;
        }

        setData(prev => ({ ...prev, ...form }));
        showNotification("success", t("dashboard.stepBasic.saved"));
    };

    return (
        <div className="step-basic">

            <div className="form-grid">

                <input
                    name="name_ar"
                    placeholder={t("dashboard.stepBasic.nameAr")}
                    value={form.name_ar}
                    onChange={handleChange}
                />

                <input
                    name="name_en"
                    placeholder={t("dashboard.stepBasic.nameEn")}
                    value={form.name_en}
                    onChange={handleChange}
                />

                <input
                    name="commercial_name"
                    placeholder={t("dashboard.stepBasic.commercialName")}
                    value={form.commercial_name}
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder={t("dashboard.stepBasic.email")}
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder={t("dashboard.stepBasic.phone")}
                    value={form.phone}
                    onChange={handleChange}
                />

                <input
                    name="city"
                    placeholder={t("dashboard.stepBasic.city")}
                    value={form.city}
                    onChange={handleChange}
                />

                <input
                    name="country"
                    placeholder={t("dashboard.stepBasic.country")}
                    value={form.country}
                    onChange={handleChange}
                />

            </div>

            <textarea
                name="description"
                placeholder={t("dashboard.stepBasic.description")}
                value={form.description}
                onChange={handleChange}
            />

            <div className="image-uploads">

                <label>
                    {t("dashboard.stepBasic.logo")}
                    <input type="file" name="logo" onChange={handleFile} />
                </label>

                <label>
                    {t("dashboard.stepBasic.cover")}
                    <input type="file" name="cover" onChange={handleFile} />
                </label>

            </div>

            <button className="save-step-btn" onClick={saveStep}>
                {t("dashboard.stepBasic.saveStep")}
            </button>

        </div>
    );
};

export default StepBasic;