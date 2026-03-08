// src/api/contact.js
import api from "./axios";

export const contactUsApi = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    return api.post("/contact-us", formData, {
        headers: {
            "Accept-Language": "en",
        },
    });
};