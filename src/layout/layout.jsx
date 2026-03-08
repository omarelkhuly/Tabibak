// src/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main >
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;