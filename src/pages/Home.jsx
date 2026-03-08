import React from "react";
import "./Home.css";
import About from "../components/About/about.jsx";
import Specialties from "../components/Specialties/Specialties";
import ContactUs from "../components/ContactUs/ContactUs";
import Features from "../components/Features/Features";
import DoctorImg from "../assets/hero-bg.png"; // الصورة كخلفية

const Home = () => {
  return (
    <>
    // HERO SECTION
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>WE PROVIDE BEST HEALTHCARE</h1>
          <p>
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </section>
      <About />
      <Specialties />
      <div className="contact-page">
        <div className="contact-overlay">
          <ContactUs />
        </div>
      </div>
      <Features />
    </>
  );
};

export default Home;