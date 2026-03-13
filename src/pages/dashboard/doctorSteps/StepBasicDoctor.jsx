// src/pages/dashboard/doctorSteps/StepBasicDoctor.jsx
// StepBasicDoctor.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../../context/NotificationContext";
import { updateDoctorApi, createDoctorApi } from "../../../api/doctorApi";
import "./DoctorSteps.css";

const StepBasicDoctor = ({ data, setData, doctorId }) => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();

    const [form, setForm] = useState({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        specialty: data.specialty || "",
    });

    useEffect(() => {
        setData((prev) => ({ ...prev, ...form }));
    }, [form]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            if (!form.name || !form.email) {
                showNotification("error", t("dashboard.steps.fillRequired"));
                return;
            }

            let res;
            if (doctorId) {
                // تحديث موجود
                res = await updateDoctorApi(doctorId, form);
            } else {
                // إنشاء جديد
                res = await createDoctorApi(form);
            }

            if (res && res.status) {
                // إشعار نجاح
                showNotification("success", t("dashboard.stepBasic.saved"));
                // ✅ رسالة في console تؤكد إنشاء الطبيب
                console.log("Doctor successfully created/updated:", res.data);
            } else {
                showNotification("error", t("dashboard.stepBasic.failed"));
                console.error("Failed to create/update doctor:", res);
            }

        } catch (error) {
            console.error("StepBasic save error:", error);
            showNotification("error", t("dashboard.stepBasic.failed"));
        }
    };

    return (
        <div className="doctor-step">
            <input
                name="name"
                placeholder={t("doctor.add.name")}
                value={form.name}
                onChange={handleChange}
            />
            <input
                name="email"
                placeholder={t("doctor.add.email")}
                value={form.email}
                onChange={handleChange}
            />
            <input
                name="phone"
                placeholder={t("doctor.add.phone")}
                value={form.phone}
                onChange={handleChange}
            />
            <input
                name="specialty"
                placeholder={t("doctor.add.specialty")}
                value={form.specialty}
                onChange={handleChange}
            />

            <button className="save-step-btn" onClick={handleSave}>
                {t("common.save")}
            </button>
        </div>
    );
};

export default StepBasicDoctor;