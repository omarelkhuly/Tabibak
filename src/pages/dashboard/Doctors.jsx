// src/pages/dashboard/Doctors.jsx
import React, { useEffect, useState } from "react";
import { getDoctorsApi, deleteDoctorApi } from "../../api/doctorApi";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import { useTranslation } from "react-i18next";
import "./Doctors.css";

const Doctors = () => {
    const { t } = useTranslation();
    const { showNotification } = useNotification();
    const navigate = useNavigate();

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDoctors();
    }, []);

    const loadDoctors = async () => {
        try {

            const res = await getDoctorsApi(1);

            console.log("Doctors response:", res);

            setDoctors(res.data || res.data?.data || []);

        } catch (error) {

            console.error("Load doctors error:", error);

            showNotification("error", t("doctor.load.failed"));

        } finally {

            setLoading(false);

        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm(t("doctor.delete.confirm"))) return;
        try {
            await deleteDoctorApi(id);
            showNotification("success", t("doctor.delete.success"));
            loadDoctors();
        } catch (error) {
            console.error(error);
            showNotification("error", t("doctor.delete.failed"));
        }
    };

    return (
        <div className="doctors-page">
            <div className="doctors-header">
                <h2 className="address_step">{t("sidebar.doctors")}</h2>
                <button
                    className="add-btn"
                    onClick={() => navigate("/dashboard/doctors/add")}
                >
                    + {t("doctor.add.submit")}
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="doctors-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>{t("doctor.add.name")}</th>
                            <th>{t("doctor.add.email")}</th>
                            <th>{t("doctor.add.phone")}</th>
                            <th>{t("doctor.add.specialty")}</th>
                            <th>{t("doctor.actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doc) => (
                            <tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.phone}</td>
                                <td>{doc.specialty}</td>
                                <td>
                                    <button onClick={() => navigate(`/dashboard/doctors/${doc.id}`)}>
                                        {t("doctor.view")}
                                    </button>
                                    <button onClick={() => handleDelete(doc.id)}>
                                        {t("doctor.delete.btn")}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Doctors;