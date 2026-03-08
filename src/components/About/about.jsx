// src/components/About/about.jsx
import "./about.css";
import aboutImg from "../../assets/About.jpg";

function AboutUs() {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Medical Dashboard" />
        </div>

        <div className="about-content">

          <span className="about-label">Medical Platform</span>

          <h2>
            Smart Management System
            for Clinics & Medical Centers
          </h2>

          <p>
            Our platform helps clinics manage patients, appointments,
            medical records and staff operations through a modern
            and easy-to-use dashboard.
          </p>

          <p>
            Built to improve healthcare workflow, reduce manual work,
            and provide doctors with better tools to deliver quality care.
          </p>

          <button className="about-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;