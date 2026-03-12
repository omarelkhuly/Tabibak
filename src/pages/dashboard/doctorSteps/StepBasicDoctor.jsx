// src/pages/dashboard/doctorSteps/StepBasicDoctor.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const StepBasic = ({ data, setData }) => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        specialty: data.specialty || ""
    });

    useEffect(() => {
        setData(prev => ({ ...prev, ...form }));
    }, [form]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="step-basic-doctor">
            <input name="name" placeholder={t("doctor.add.name")} value={form.name} onChange={handleChange} />
            <input name="email" placeholder={t("doctor.add.email")} value={form.email} onChange={handleChange} />
            <input name="phone" placeholder={t("doctor.add.phone")} value={form.phone} onChange={handleChange} />
            <input name="specialty" placeholder={t("doctor.add.specialty")} value={form.specialty} onChange={handleChange} />
        </div>
    );
};

export default StepBasic;