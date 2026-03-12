// src/api/doctorApi.js
import api from "./axios";
import i18n from "../i18n";

const headers = () => ({
    "Accept-Language": i18n.language || "en"
});

/* ================= GET DOCTORS ================= */

export const getDoctorsApi = async () => {
    try {

        const res = await api.get(`provider/v1/doctors`, {
            headers: headers()
        });

        console.log("Doctors API:", res.data);

        return res.data;

    } catch (error) {

        console.error("Error Data:", error.response?.data);

        throw error;
    }
};

/* ================= GET DOCTOR ================= */

export const getDoctorApi = async (id) => {
    const res = await api.get(`provider/v1/doctors/${id}`, {
        headers: headers()
    });

    return res.data;
};

/* ================= CREATE DOCTOR ================= */

export const createDoctorApi = async (data) => {
    const res = await api.post("provider/v1/doctors", data, {
        headers: headers()
    });

    return res.data;
};

/* ================= UPDATE DOCTOR ================= */

export const updateDoctorApi = async (id, data) => {
    const res = await api.put(`provider/v1/doctors/${id}`, data, {
        headers: headers()
    });

    return res.data;
};

/* ================= DELETE DOCTOR ================= */

export const deleteDoctorApi = async (id) => {
    const res = await api.delete(`provider/v1/doctors/${id}`, {
        headers: headers()
    });

    return res.data;
};