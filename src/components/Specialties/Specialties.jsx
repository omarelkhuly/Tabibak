import "./Specialties.css";

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

const specialties = [
    {
        icon: <FaHeartbeat />,
        title: "طب القلب",
        desc: "تشخيص وعلاج أمراض القلب والشرايين."
    },
    {
        icon: <FaBaby />,
        title: "طب الأطفال",
        desc: "رعاية صحة الأطفال منذ الولادة."
    },
    {
        icon: <FaEye />,
        title: "طب العيون",
        desc: "تشخيص وعلاج مشاكل النظر وأمراض العين."
    },
    {
        icon: <FaBrain />,
        title: "طب الأعصاب",
        desc: "علاج أمراض الجهاز العصبي والدماغ."
    },
    {
        icon: <FaBone />,
        title: "طب العظام",
        desc: "تشخيص وعلاج الكسور ومشاكل المفاصل."
    },
    {
        icon: <FaTooth />,
        title: "طب الأسنان",
        desc: "العناية بصحة الفم والأسنان."
    },
    {
        icon: <FaMicroscope />,
        title: "المختبرات الطبية",
        desc: "إجراء التحاليل الطبية المختلفة."
    },
    {
        icon: <FaXRay />,
        title: "الأشعة التشخيصية",
        desc: "تشخيص الأمراض باستخدام الأشعة."
    },
    {
        icon: <FaProcedures />,
        title: "العناية المركزة",
        desc: "رعاية المرضى في الحالات الحرجة."
    },
    {
        icon: <FaUserMd />,
        title: "الطب الباطني",
        desc: "تشخيص الأمراض الداخلية وعلاجها."
    }
];

function Specialties() {
    const isRTL = document.documentElement.dir === "rtl";
    return (
        <section className="specialties-section">

            <h2 className="specialties-title">
                التخصصات الطبية
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