// src/pages/dashboard/DashboardProfile.jsx
import React, { useState, useEffect } from "react";
import { getProfileApi, updateProfileApi, changePasswordApi } from "@/api/authApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { successAlert, errorAlert } from "@/alerts";
import { useTranslation } from "react-i18next";
import Notification from "../../components/DashboardComponent/Notification";
import "./DashboardProfile.css";

const DashboardProfile = () => {
  const { t } = useTranslation();
  const [notification, setNotification] = useState({
    type: "",
    message: ""
  });
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    provider_type: "",
    birth_date: "",
    gender: "",
    bio: ""
  });

  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
    showCurrent: false,
    showNew: false,
    showConfirm: false
  });

  // جلب بيانات البروفايل
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfileApi();
        const data = res.data.data;

        const name = typeof data.name === "object" ? (data.name.en || data.name.ar || "") : data.name || "";
        const countryName = data.country?.name || "";
        const cityName = data.city?.name || "";
        const birthDate = data.birth_date || "";
        const gender = data.gender?.label || data.gender || "";
        const bio = data.bio || "";

        setProfile(data);
        setFormData({
          name,
          email: data.email || "",
          phone: data.phone || "",
          country: countryName,
          city: cityName,
          provider_type: data.provider_type || "",
          birth_date: birthDate,
          gender,
          bio
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handlePasswordChange = e => setPasswordData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const togglePassword = field => setPasswordData(prev => ({ ...prev, [field]: !prev[field] }));

  const handleUpdateProfile = async e => {
    e.preventDefault();
    setUpdating(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([k, v]) => form.append(k, v));
      await updateProfileApi(form);
      setNotification({
        type: "success",
        message: t("dashboard.profile.updateSuccess")
      });

      setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error(error);
      setNotification({
        type: "error",
        message: t("dashboard.profile.updateFail")
      });

      setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 3000);
    } finally {
      setUpdating(false);
    }
  };

  const handleChangePassword = async e => {
    e.preventDefault();
    setPasswordLoading(true);
    if (passwordData.new_password !== passwordData.new_password_confirmation) {
      setNotification({
        type: "error",
        message: t("dashboard.profile.passwordMismatch")
      });

      setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 3000);
      setPasswordLoading(false);
      return;
    }
    try {
      await changePasswordApi({
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
        password_confirmation: passwordData.new_password_confirmation
      });
      setNotification({
        type: "success",
        message: t("dashboard.profile.passwordSuccess")
      });

      setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 3000);
      setPasswordData({ current_password: "", new_password: "", new_password_confirmation: "", showCurrent: false, showNew: false, showConfirm: false });
    } catch (error) {
      console.error(error);
      setNotification({
        type: "error",
        message: t("dashboard.profile.passwordFail")
      });

      setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 3000);
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) return <div>{t("dashboard.profile.loading")}</div>;

  return (
    <div className="dashboard-profile">
      <Notification
        type={notification.type}
        message={notification.message}
      />
      <h1 className="dp-title">{t("dashboard.profile.title")}</h1>

      <div className="dp-grid">
        {/* PROFILE CARD */}
        <div className="dp-card">
          <form className="dp-form dp-form-profile" onSubmit={handleUpdateProfile}>
            <label>
              {t("dashboard.profile.name")}:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
              {t("dashboard.profile.email")}:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
              {t("dashboard.profile.phone")}:
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label>

            <label>
              {t("dashboard.profile.country")}:
              <input type="text" name="country" value={formData.country} readOnly />
            </label>

            <label>
              {t("dashboard.profile.city")}:
              <input type="text" name="city" value={formData.city} readOnly />
            </label>

            <label>
              {t("dashboard.profile.providerType")}:
              <input type="text" name="provider_type" value={formData.provider_type} onChange={handleChange} />
            </label>

            <label>
              {t("dashboard.profile.birthDate")}:
              <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
            </label>

            <label>
              {t("dashboard.profile.gender")}:
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
            </label>

            <label className="dp-full">
              {t("dashboard.profile.bio")}:
              <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
            </label>

            <div className="dp-full dp-actions">
              <button type="submit" disabled={updating}>
                {updating ? t("dashboard.profile.updating") : t("dashboard.profile.updateButton")}
              </button>
            </div>
          </form>
        </div>

        {/* CHANGE PASSWORD CARD */}
        <div className="dp-card">
          <h2 className="dp-subtitle">{t("dashboard.profile.changePassword")}</h2>
          <form className="dp-form" onSubmit={handleChangePassword} dir="rtl">

            <label>
              {t("dashboard.profile.currentPassword")}:
              <div className="password-wrapper">
                <input type={passwordData.showCurrent ? "text" : "password"} name="current_password" value={passwordData.current_password} onChange={handlePasswordChange} />
                <FontAwesomeIcon
                  icon={passwordData.showCurrent ? faEyeSlash : faEye}
                  className="toggle-eye"
                  onClick={() => togglePassword("showCurrent")}
                />
              </div>
            </label>

            <label>
              {t("dashboard.profile.newPassword")}:
              <div className="password-wrapper">
                <input type={passwordData.showNew ? "text" : "password"} name="new_password" value={passwordData.new_password} onChange={handlePasswordChange} />
                <FontAwesomeIcon
                  icon={passwordData.showNew ? faEyeSlash : faEye}
                  className="toggle-eye"
                  onClick={() => togglePassword("showNew")}
                />
              </div>
            </label>

            <label>
              {t("dashboard.profile.confirmNewPassword")}:
              <div className="password-wrapper">
                <input type={passwordData.showConfirm ? "text" : "password"} name="new_password_confirmation" value={passwordData.new_password_confirmation} onChange={handlePasswordChange} />
                <FontAwesomeIcon
                  icon={passwordData.showConfirm ? faEyeSlash : faEye}
                  className="toggle-eye"
                  onClick={() => togglePassword("showConfirm")}
                />
              </div>
            </label>

            <button type="submit" disabled={passwordLoading}>{passwordLoading ? t("dashboard.profile.changing") : t("dashboard.profile.changeButton")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;