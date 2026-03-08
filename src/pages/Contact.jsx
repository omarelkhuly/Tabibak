// src/pages/Contact.jsx
import React from 'react';
import './contact.css';
import ContactUs from "../components/ContactUs/ContactUs";
const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-overlay">
                <ContactUs />
            </div>
        </div>
    );
}

export default Contact;