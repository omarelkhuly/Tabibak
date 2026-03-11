// src/components/ContactUs/ContactUs.jsx
import { useState } from "react";
import "./ContactUs.css";
import { contactUsApi } from "../../api/contact";
import { useTranslation } from "react-i18next";

function ContactUs() {

    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await contactUsApi(form);

            setSuccess(t("contact.success"));

            setForm({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">

            <div className="contact-container">

                <div className="contact-info">
                    <h2>{t("contact.title")}</h2>

                    <p>{t("contact.desc")}</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder={t("common.name")}
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder={t("common.email")}
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder={t("common.message")}
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? t("common.sending") : t("common.send")}
                    </button>

                    {success && <p className="success">{success}</p>}

                </form>

            </div>

        </section>
    );
}

export default ContactUs;