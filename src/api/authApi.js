// src/api/authApi.js
import api from "./axios";
import i18n from "../i18n";

const headers = () => ({
  "Accept-Language": i18n.language || "en",
});

/* ================= REGISTER ================= */
export const registerApi = (data) => {
  return api.post("/provider/v1/register", data, {
    headers: {
      ...headers(),
      "Content-Type": "multipart/form-data",
    },
  });
};

/* ================= LOGIN ================= */
export const loginApi = (data) => {
  return api.post("/provider/v1/login", data, {
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
  });
};

/* ================= LOGOUT ================= */
export const logoutApi = () => {
  return api.post("/provider/v1/logout", {}, {
    headers: {
      ...headers(),
    },
  });
};

/* ================= FORGET PASSWORD ================= */
export const forgetPasswordApi = (email) => {
  return api.post(
    "/provider/v1/forget-password",
    { email },
    {
      headers: {
        ...headers(),
        "Content-Type": "application/json",
      },
    }
  );
};

/* ================= RESET PASSWORD ================= */
export const resetPasswordApi = ({ email, pin_code, password, password_confirmation }) => {
  return api.post(
    "/provider/v1/reset-password",
    {
      email,
      pin_code,
      password,
      password_confirmation,
    },
    {
      headers: {
        ...headers(),
        "Content-Type": "application/json",
      },
    }
  );
};

/* ================= CHANGE PASSWORD ================= */
export const changePasswordApi = (data) => {
  return api.post("/provider/v1/change-password", data, {
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
  });
};