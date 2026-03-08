// src/components/ContactUs/ContactUs.jsx
import { useState } from "react";
import "./ContactUs.css";
import { contactUsApi } from "../../api/contact";

function ContactUs() {

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

            setSuccess("Message sent successfully");

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
                    <h2>Contact Us</h2>

                    <p>
                        If you have any questions about the medical platform
                        or need help managing your clinic dashboard,
                        send us a message.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Write your message..."
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && <p className="success">{success}</p>}

                </form>

            </div>

        </section>
    );
}

export default ContactUs;