// src/pages/Auth.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { successAlert, errorAlert } from "../alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faArrowRight,
  faGlobe,
  faCity,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import {
  loginApi,
  registerApi,
  forgetPasswordApi,
  resetPasswordApi,
} from "../api/authApi";

import axios from "axios";
import "./Auth.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);

  const [emailForReset, setEmailForReset] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    country_id: "",
    city_id: "",
    provider_type: "clinic",
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  /* ================= URL MODE ================= */

  useEffect(() => {
    if (location.pathname === "/register") {
      setMode("register");
    } else {
      setMode("login");
    }
  }, [location.pathname]);

  /* ================= COUNTRIES ================= */

  useEffect(() => {
    axios
      .get("https://tabybak.com/api/provider/v1/countries")
      .then((res) => {
        if (res.data.status) {
          const list = Array.isArray(res.data.data)
            ? res.data.data
            : res.data.data?.data || [];

          setCountries(list);
        }
      })
      .catch(() => setCountries([]));
  }, []);

  /* ================= CITIES ================= */

  useEffect(() => {
    if (!registerData.country_id) return;

    axios
      .get(
        `https://tabybak.com/api/provider/v1/cities/${registerData.country_id}`
      )
      .then((res) => {
        if (res.data.status) {
          const list = Array.isArray(res.data.data)
            ? res.data.data
            : res.data.data?.data || [];

          setCities(list);
        }
      })
      .catch(() => setCities([]));
  }, [registerData.country_id]);

  /* ================= LOGIN ================= */

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

        successAlert("Login Successful ✅");

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 1200);
      }
    } catch (err) {
      errorAlert(
        err?.response?.data?.message ||
        "Login Failed ❌"
      );
    }

    setLoading(false);
  };

  /* ================= REGISTER ================= */

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (registerData.password !== registerData.password_confirmation) {
      errorAlert("Passwords do not match ❌");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();

      Object.entries(registerData).forEach(([k, v]) => {
        formData.append(k, v);
      });

      const res = await registerApi(formData);

      if (res.data.status) {
        const token = res?.data?.token || res?.data?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("isLoggedIn", "true");
        }

        successAlert("Account Created Successfully 🎉");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      errorAlert(
        err?.response?.data?.message ||
        "Registration Failed ❌"
      );
    }

    setLoading(false);
  };

  /* ================= FORGET PASSWORD ================= */

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await forgetPasswordApi(emailForReset);

      if (res.data.status) {
        successAlert("Pin Code Sent To Your Email ✅");
        setMode("reset");
      }
    } catch {
      errorAlert("Failed to send Pin Code ❌");
    }

    setLoading(false);
  };

  /* ================= RESET PASSWORD ================= */

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await resetPasswordApi({
        email: emailForReset,
        pin_code: pinCode,
        password: newPassword,
        password_confirmation: newPassword,
      });

      if (res.data.status) {
        successAlert("Password Reset Successfully 🎉");
        setMode("login");
      }
    } catch {
      errorAlert("Reset Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {mode === "login" && (
          <form className="form-side" onSubmit={handleLogin}>

            <h2>Login</h2>

            <Input
              icon={faEnvelope}
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <Input
              icon={faLock}
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <button className="primary-btn">
              {loading ? "..." : "Login"}
            </button>

            <p
              className="switch-text"
              onClick={() => setMode("forget")}
            >
              Forget Password
            </p>

            <p className="switch-text">
              No Account{" "}
              <span onClick={() => navigate("/register")}>
                Create Account <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>

          </form>
        )}

        {mode === "register" && (
          <form className="form-side" onSubmit={handleRegister}>

            <h2>Register</h2>

            <Input icon={faUser} placeholder="Name"
              onChange={(e)=>setRegisterData({...registerData,name:e.target.value})}
            />

            <Input icon={faEnvelope} type="email" placeholder="Email"
              onChange={(e)=>setRegisterData({...registerData,email:e.target.value})}
            />

            <Input icon={faPhone} placeholder="Phone"
              onChange={(e)=>setRegisterData({...registerData,phone:e.target.value})}
            />

            <Select
              icon={faGlobe}
              value={registerData.country_id}
              onChange={(e)=>
                setRegisterData({
                  ...registerData,
                  country_id:e.target.value,
                  city_id:""
                })
              }
            >
              <option value="">Select Country</option>

              {countries.map((c)=>(
                <option key={c.id} value={c.id}>
                  {c.name || c.name_en || c.name_ar}
                </option>
              ))}

            </Select>

            <Select
              icon={faCity}
              value={registerData.city_id}
              onChange={(e)=>
                setRegisterData({
                  ...registerData,
                  city_id:e.target.value
                })
              }
            >

              <option value="">Select City</option>

              {cities.map((c)=>(
                <option key={c.id} value={c.id}>
                  {c.name || c.name_en || c.name_ar}
                </option>
              ))}

            </Select>

            <Input icon={faLock} type="password" placeholder="Password"
              onChange={(e)=>setRegisterData({...registerData,password:e.target.value})}
            />

            <Input icon={faLock} type="password" placeholder="Confirm Password"
              onChange={(e)=>setRegisterData({...registerData,password_confirmation:e.target.value})}
            />

            <button className="primary-btn">
              {loading ? "..." : "Register"}
            </button>

            <p className="switch-text">
              Have Account{" "}
              <span onClick={()=>navigate("/login")}>
                Login
              </span>
            </p>

          </form>
        )}

      </div>
    </div>
  );
};

/* ================= INPUT ================= */

const Input = ({ icon, type="text", ...props }) => {

  const [showPassword,setShowPassword] = useState(false);
  const isPassword = type==="password";

  return (
    <div className="input-group">

      <FontAwesomeIcon icon={icon} className="input-icon"/>

      <input
        {...props}
        type={isPassword ? (showPassword ? "text":"password") : type}
        required
      />

      {isPassword && (
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="password_toggle"
          onClick={()=>setShowPassword(!showPassword)}
        />
      )}

    </div>
  );
};

/* ================= SELECT ================= */

const Select = ({ icon, children, ...props }) => (
  <div className="input-group">

    <FontAwesomeIcon icon={icon} className="input-icon"/>

    <select {...props} required>
      {children}
    </select>

  </div>
);

export default AuthPage;