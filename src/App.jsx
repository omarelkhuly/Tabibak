// src/App.jsx 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import DashboardLayout from './layout/DashboardLayout';

import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

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
      </Route>

      {/* Auth Pages بدون Footer/Navbar لو حبيت */}
      <Route path="/Register" element={<Auth />} />
      <Route path="/Login" element={<Auth />} />

      <Route path="*" element={<Auth />} />

      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />


    </Routes>
  );
}

export default App;