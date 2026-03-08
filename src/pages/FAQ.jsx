// src/pages/FAQ.jsx
import React, { useEffect, useState } from "react";
import { getFaqApi } from "../api/faq";
import { FaChevronDown } from "react-icons/fa";
import "./faq.css";

const FaqSection = () => {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await getFaqApi();
                if (res.data.status) setFaqs(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchFaqs();
    }, []);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Hero / Banner Section */}
            <section className="faq-hero">
                <div className="faq-hero-overlay">
                    <h1>الأسئلة الشائعة</h1>
                    <p>نحن هنا لنجيب على أهم الأسئلة حول منصتنا الطبية وخدماتنا</p>
                </div>
            </section>
            <section className="faq-section">
                <div className="faq-overlay">
                    <div className="faq-container">
                        <h2 className="faq-title">الأسئلة الشائعة</h2>

                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div className="faq-item" key={faq.id}>
                                    <div className="faq-question" onClick={() => toggle(index)}>
                                        <span>{faq.question}</span>
                                        <FaChevronDown
                                            className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                                        />
                                    </div>

                                    {openIndex === index && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqSection;