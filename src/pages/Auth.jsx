// src/pages/Auth.js

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { successAlert, errorAlert } from "../alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, faLock, faUser, faPhone,
  faArrowRight, faGlobe, faCity, faEye, faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

import { loginApi, registerApi, forgetPasswordApi, resetPasswordApi } from "../api/authApi";
import axios from "axios";
import "./Auth.css";

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);

  const [emailForReset, setEmailForReset] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "", email: "", password: "", password_confirmation: "",
    phone: "", country_id: "", city_id: "", provider_type: "clinic"
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setMode(location.pathname === "/register" ? "register" : "login");
  }, [location.pathname]);

  useEffect(() => {
    axios.get("https://tabybak.com/api/provider/v1/countries")
      .then(res => {
        const list = Array.isArray(res.data.data) ? res.data.data : res.data.data?.data || [];
        setCountries(list);
      })
      .catch(() => setCountries([]));
  }, []);

  useEffect(() => {
    if (!registerData.country_id) return;
    axios.get(`https://tabybak.com/api/provider/v1/cities/${registerData.country_id}`)
      .then(res => {
        const list = Array.isArray(res.data.data) ? res.data.data : res.data.data?.data || [];
        setCities(list);
      })
      .catch(() => setCities([]));
  }, [registerData.country_id]);

  /* ================= HANDLERS ================= */

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginApi(loginData);
      const token = res?.data?.token || res?.data?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("authChange"));
        successAlert(t("auth.login") + " ✅");
        setTimeout(() => navigate("/dashboard", { replace: true }), 1000);
      }
    } catch (err) {
      errorAlert(err?.response?.data?.message || t("auth.login") + " ❌");
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (registerData.password !== registerData.password_confirmation) {
      errorAlert(t("auth.confirmPassword") + " ❌");
      setLoading(false);
      return;
    }
    try {
      const formData = new FormData();
      Object.entries(registerData).forEach(([k, v]) => formData.append(k, v));
      const res = await registerApi(formData);
      if (res.data.status) {
        const token = res?.data?.token || res?.data?.data?.token;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("isLoggedIn", "true");
        }
        successAlert(t("auth.register") + " 🎉");
        setTimeout(() => navigate("/dashboard"), 1000);
      }
    } catch (err) {
      errorAlert(err?.response?.data?.message || t("auth.register") + " ❌");
    }
    setLoading(false);
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await forgetPasswordApi(emailForReset);
      if (res.data.status) {
        successAlert(t("auth.sendPin") + " ✅");
        setMode("reset");
      }
    } catch (err) {
      errorAlert(err?.response?.data?.message || t("auth.sendPin") + " ❌");
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!pinCode || !newPassword) {
      errorAlert(t("auth.pinCode") + " & " + t("auth.newPassword") + " ❌");
      return;
    }
    setLoading(true);
    try {
      const payload = { email: emailForReset, pin_code: pinCode, password: newPassword, password_confirmation: newPassword };
      const res = await resetPasswordApi(payload);
      if (res?.data?.status) {
        successAlert(t("auth.resetPassword") + " 🎉");
        setPinCode(""); setNewPassword("");
        setTimeout(() => setMode("login"), 1000);
      }
    } catch (err) {
      errorAlert(err?.response?.data?.message || t("auth.resetPassword") + " ❌");
    }
    setLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* LOGIN */}
        {mode === "login" && (
          <form className="form-side" onSubmit={handleLogin}>
            <h2>{t("auth.login")}</h2>
            <Input icon={faEnvelope} type="email" placeholder={t("auth.email")} onChange={e => setLoginData({ ...loginData, email: e.target.value })} />
            <Input icon={faLock} type="password" placeholder={t("auth.password")} onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
            <button className="primary-btn">{loading ? "..." : t("auth.login")}</button>
            <p className="switch-text" onClick={() => setMode("forget")}>{t("auth.forgetPassword")}</p>
            <p className="switch-text">{t("auth.noAccount")} <span onClick={() => navigate("/register")}><FontAwesomeIcon icon={faArrowRight} /></span></p>
          </form>
        )}

        {/* REGISTER */}
        {mode === "register" && (
          <form className="form-side" onSubmit={handleRegister}>
            <h2>{t("auth.register")}</h2>
            <Input icon={faUser} placeholder={t("auth.name")} onChange={e => setRegisterData({ ...registerData, name: e.target.value })} />
            <Input icon={faEnvelope} type="email" placeholder={t("auth.email")} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} />
            <Input icon={faPhone} placeholder={t("auth.phone")} onChange={e => setRegisterData({ ...registerData, phone: e.target.value })} />
            <Select icon={faGlobe} value={registerData.country_id} onChange={e => setRegisterData({ ...registerData, country_id: e.target.value, city_id: "" })}>
              <option value="">{t("auth.selectCountry")}</option>
              {countries.map(c => <option key={c.id} value={c.id}>{c.name || c.name_en || c.name_ar}</option>)}
            </Select>
            <Select icon={faCity} value={registerData.city_id} onChange={e => setRegisterData({ ...registerData, city_id: e.target.value })}>
              <option value="">{t("auth.selectCity")}</option>
              {cities.map(c => <option key={c.id} value={c.id}>{c.name || c.name_en || c.name_ar}</option>)}
            </Select>
            <Input icon={faLock} type="password" placeholder={t("auth.password")} onChange={e => setRegisterData({ ...registerData, password: e.target.value })} />
            <Input icon={faLock} type="password" placeholder={t("auth.confirmPassword")} onChange={e => setRegisterData({ ...registerData, password_confirmation: e.target.value })} />
            <button className="primary-btn">{loading ? "..." : t("auth.register")}</button>
            <p className="switch-text">{t("auth.haveAccount")} <span onClick={() => setMode("login")}>{t("auth.login")}</span></p>
          </form>
        )}

        {/* FORGET PASSWORD */}
        {mode === "forget" && (
          <form className="form-side" onSubmit={handleForgetPassword}>
            <h2>{t("auth.forgetPassword")}</h2>
            <Input icon={faEnvelope} type="email" placeholder={t("auth.email")} value={emailForReset} onChange={e => setEmailForReset(e.target.value)} />
            <button className="primary-btn">{loading ? "..." : t("auth.sendPin")}</button>
            <p className="switch-text">{t("auth.backToLogin")} <span onClick={() => setMode("login")}>{t("auth.login")}</span></p>
          </form>
        )}

        {/* RESET PASSWORD */}
        {mode === "reset" && (
          <form className="form-side" onSubmit={handleResetPassword}>
            <h2>{t("auth.resetPassword")}</h2>
            <Input icon={faEnvelope} type="email" placeholder={t("auth.email")} value={emailForReset} onChange={e => setEmailForReset(e.target.value)} />
            <Input icon={faLock} placeholder={t("auth.pinCode")} value={pinCode} onChange={e => setPinCode(e.target.value)} />
            <Input icon={faLock} type="password" placeholder={t("auth.newPassword")} value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <button className="primary-btn">{loading ? "..." : t("auth.resetPassword")}</button>
            <p className="switch-text"><span onClick={() => setMode("login")}>{t("auth.backToLogin")}</span></p>
          </form>
        )}

      </div>
    </div>
  );
};

/* INPUT */
const Input = ({ icon, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="input-group">
      <FontAwesomeIcon icon={icon} className="input-icon" />
      <input {...props} type={isPassword ? (showPassword ? "text" : "password") : type} required />
      {isPassword && <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password_toggle" onClick={() => setShowPassword(!showPassword)} />}
    </div>
  );
};

/* SELECT */
const Select = ({ icon, children, ...props }) => (
  <div className="input-group">
    <FontAwesomeIcon icon={icon} className="input-icon" />
    <select {...props} required>{children}</select>
  </div>
);

export default AuthPage;