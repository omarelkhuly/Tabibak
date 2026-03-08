// src/api/faq.js
import api from "./axios";

export const getFaqApi = () => {
  return api.get("/faqs", {
    headers: {
      "Accept-Language": "ar", // أو "en" حسب اللغة
    },
  });
};