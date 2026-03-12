import api from "./axios";
import i18n from "../i18n";

const headers = () => ({
    "Accept-Language": i18n.language || "en"
});

/* GET DOCTOR DOCUMENTS */

export const getDoctorDocumentsApi = async (doctorId) => {
    const res = await api.get(
        `/provider/v1/doctors/${doctorId}/documents`,
        { headers: headers() }
    );

    return res.data;
};

/* UPLOAD DOCUMENT */

export const uploadDoctorDocumentApi = async (doctorId, formData) => {
    const res = await api.post(
        `/provider/v1/doctors/${doctorId}/documents`,
        formData,
        { headers: headers() }
    );

    return res.data;
};

/* DELETE DOCUMENT */

export const deleteDoctorDocumentApi = async (doctorId, docId) => {
    const res = await api.delete(
        `/provider/v1/doctors/${doctorId}/documents/${docId}`,
        { headers: headers() }
    );

    return res.data;
};