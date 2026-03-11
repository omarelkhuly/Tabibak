// src/api/facilityApi.js
import api from "./axios";
import i18n from "../i18n";

/* ================= GET DOCUMENTS ================= */

export const getDocumentsApi = async () => {
  const res = await api.get("/provider/v1/documents", {
    headers: {
      "Accept-Language": i18n.language || "en"
    }
  });

  return res.data;
};


/* ================= DELETE DOCUMENT ================= */

export const deleteDocumentApi = async (id) => {
  const res = await api.delete(`/provider/v1/documents/${id}`, {
    headers: {
      "Accept-Language": i18n.language || "en"
    }
  });

  return res.data;
};


/* ================= UPLOAD DOCUMENT ================= */

export const uploadDocumentApi = async (data) => {
  const res = await api.post("/provider/v1/documents", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Accept-Language": i18n.language || "en"
    }
  });

  return res.data;
};