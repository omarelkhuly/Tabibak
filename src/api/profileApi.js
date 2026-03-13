// src/api/profileApi.js
import api from "./axios";
import i18n from "../i18n";

const headers = () => ({
  "Accept-Language": i18n.language || "en"
});

/* ================= GET PROFILE ================= */
export const getProfileApi = async () => {
  try {
    const res = await api.get("/provider/v1/profile", { headers: headers() });
    // عادة الـ data داخل res.data.data
    return res.data;
  } catch (error) {
    console.error("Get profile error:", error.response?.data || error);
    throw error;
  }
};

/* ================= UPDATE PROFILE ================= */
export const updateProfileApi = async (formData) => {
  try {
    const res = await api.put("/provider/v1/profile", formData, {
      headers: {
        ...headers(),
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  } catch (error) {
    console.error("Update profile error:", error.response?.data || error);
    throw error;
  }
};