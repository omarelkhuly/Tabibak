// src/components/About/about.jsx
import "./about.css";
import aboutImg from "../../assets/About.jpg";
import { useTranslation } from "react-i18next";

function AboutUs() {

  const { t } = useTranslation();

  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Medical Dashboard" />
        </div>

        <div className="about-content">

          <span className="about-label">
            {t("about.platform")}
          </span>

          <h2>
            {t("about.title")}
          </h2>

          <p>
            {t("about.desc1")}
          </p>

          <p>
            {t("about.desc2")}
          </p>

          <button className="about-btn">
            {t("common.learnMore")}
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;