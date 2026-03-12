// src/api/authApi.js
import api from "./axios";

/* ================= REGISTER ================= */
export const registerApi = (data) => {
  // Backend expects provider registration under /provider/v1/register
  return api.post("provider/v1/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Accept-Language": "en",
    },
  });
};

/* ================= LOGIN ================= */
export const loginApi = (data) => {
  return api.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });
};

/* ================= GET PROFILE ================= */
export const getProfileApi = () => {
  // Backend profile endpoint is under provider/v1
  return api.get("provider/v1/profile", {
    headers: {
      "Accept-Language": "en",
    },
  });
};

/* ================= UPDATE PROFILE ================= */
export const updateProfileApi = (data) => {
  // Same endpoint used for updating profile data
  return api.post("provider/v1/profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Accept-Language": "en",
    },
  });
};

/* ================= LOGOUT ================= */
export const logoutApi = () => {
  return api.post("/logout", {}, {
    headers: {
      "Accept-Language": "en",
    },
  });
};

/* ================= FORGET PASSWORD ================= */
export const forgetPasswordApi = (email) => {
  return api.post(`/forget-password?email=${email}`, null, {
    headers: {
      "Accept-Language": "en",
    },
  });
};

/* ================= RESET PASSWORD ================= */
export const resetPasswordApi = (data) => {
  return api.post("/reset-password", data, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });
};

/* ================= CHANGE PASSWORD ================= */
export const changePasswordApi = (data) => {
  return api.post("/change-password", data, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });
};
