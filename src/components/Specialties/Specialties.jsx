import "./Specialties.css";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
    FaHeartbeat,
    FaBaby,
    FaEye,
    FaTooth,
    FaBrain,
    FaBone,
    FaMicroscope,
    FaXRay,
    FaProcedures,
    FaUserMd
} from "react-icons/fa";

function Specialties() {

    const { t } = useTranslation();

    const specialties = [
        { icon: <FaHeartbeat />, title: t("specialties.cardioTitle"), desc: t("specialties.cardioDesc") },
        { icon: <FaBaby />, title: t("specialties.pediatricsTitle"), desc: t("specialties.pediatricsDesc") },
        { icon: <FaEye />, title: t("specialties.eyeTitle"), desc: t("specialties.eyeDesc") },
        { icon: <FaBrain />, title: t("specialties.neuroTitle"), desc: t("specialties.neuroDesc") },
        { icon: <FaBone />, title: t("specialties.orthoTitle"), desc: t("specialties.orthoDesc") },
        { icon: <FaTooth />, title: t("specialties.dentalTitle"), desc: t("specialties.dentalDesc") },
        { icon: <FaMicroscope />, title: t("specialties.labTitle"), desc: t("specialties.labDesc") },
        { icon: <FaXRay />, title: t("specialties.radiologyTitle"), desc: t("specialties.radiologyDesc") },
        { icon: <FaProcedures />, title: t("specialties.icuTitle"), desc: t("specialties.icuDesc") },
        { icon: <FaUserMd />, title: t("specialties.internalTitle"), desc: t("specialties.internalDesc") }
    ];

    const isRTL = document.documentElement.dir === "rtl";

    return (
        <section className="specialties-section">

            <h2 className="specialties-title">
                {t("specialties.title")}
            </h2>

            <Swiper
                dir={isRTL ? "rtl" : "ltr"}
                spaceBetween={25}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 }
                }}
            >

                {specialties.map((item, index) => (
                    <SwiperSlide key={index}>

                        <div className="specialty-card">

                            <div className="icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
}

export default Specialties;