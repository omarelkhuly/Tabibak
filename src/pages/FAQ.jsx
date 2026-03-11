import React, { useEffect, useState } from "react";
import { getFaqApi } from "../api/faq";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import "./faq.css";

const FaqSection = () => {
    const { t, i18n } = useTranslation();
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    // نسخة ثابتة للإنجليزية
    const englishFaqs = [
        {
            id: 1,
            question: "How can I register as a service provider?",
            answer:
                "You can register by clicking the Register button on the homepage and filling in your business and contact details."
        },
        {
            id: 2,
            question: "Are there fees to join the platform?",
            answer:
                "Registration is free for a limited time. Please check the plans section for more details about premium features."
        },
        {
            id: 3,
            question: "How can I update my profile information?",
            answer:
                "You can update your profile through the profile settings in your dashboard."
        }
    ];

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                if (i18n.language === "ar") {
                    // العربي: نجيب من API
                    const res = await getFaqApi();
                    if (res.data.status) {
                        setFaqs(res.data.data);
                    }
                } else {
                    // الإنجليزي: أول مرة نحفظه في localStorage
                    const cachedEnglish = localStorage.getItem("faqs-en");
                    if (cachedEnglish) {
                        setFaqs(JSON.parse(cachedEnglish));
                    } else {
                        setFaqs(englishFaqs);
                        localStorage.setItem("faqs-en", JSON.stringify(englishFaqs));
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchFaqs();
    }, [i18n.language]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Hero */}
            <section className="faq-hero">
                <div className="faq-hero-overlay">
                    <h1>{t("faq.title")}</h1>
                    <p>{t("faq.subtitle")}</p>
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-overlay">
                    <div className="faq-container">
                        <h2 className="faq-title">{t("faq.title")}</h2>

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