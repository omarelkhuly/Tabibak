// src/App.jsx 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import DashboardLayout from './layout/DashboardLayout';

import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import Facilities from "./pages/dashboard/Facilities";
import CreateFacility from "./pages/dashboard/CreateFacility";
import Doctors from "./pages/dashboard/Doctors";
import AddDoctorWizard from "./pages/dashboard/AddDoctorWizard";
import ProtectedRoute from "./components/DashboardComponent/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About-us";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Auth from './pages/Auth';
import ServiceDetails from "./components/Details/ServiceDetails";
import BlogDetails from "./components/Details/BlogDetails";
import RegistrationGuide from "./components/RegistrationGuide/RegistrationGuide";


function App() {
  return (

    <Routes>

      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration-guide" element={<RegistrationGuide />} />
      </Route>

      {/* Auth Pages بدون Footer/Navbar لو حبيت */}
      <Route path="/Register" element={<Auth />} />
      <Route path="/Login" element={<Auth />} />

      {/* Dashboard Wrapper */}
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="facilities/create" element={<CreateFacility />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/add" element={<AddDoctorWizard />} />
      </Route>

      <Route path="*" element={<Auth />} />
    </Routes>
  );
}

export default App;