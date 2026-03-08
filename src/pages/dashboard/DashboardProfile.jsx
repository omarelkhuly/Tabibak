// src/pages/dashboard/DashboardProfile.jsx
import React, { useState, useEffect } from "react";
import { getProfileApi, updateProfileApi, changePasswordApi } from "@/api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { successAlert, errorAlert } from "../../alerts";
import "./DashboardProfile.css";

const DashboardProfile = () => {
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
    provider_type: ""
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

        // الاسم يظهر بشكل صحيح
        const name = typeof data.name === "object" ? data.name.en || "" : data.name || "";

        // Country و City يظهروا باسمهم فقط
        const countryName = data.country?.name || "";
        const cityName = data.city?.name || "";

        setProfile(data);
        setFormData({
          name,
          email: data.email || "",
          phone: data.phone || "",
          country: countryName,
          city: cityName,
          provider_type: data.provider_type || ""
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
      successAlert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      errorAlert("Failed to update profile.");
    } finally {
      setUpdating(false);
    }
  };

  const handleChangePassword = async e => {
    e.preventDefault();
    setPasswordLoading(true);
    if (passwordData.new_password !== passwordData.new_password_confirmation) {
      errorAlert("Passwords do not match!");
      setPasswordLoading(false);
      return;
    }
    try {
      await changePasswordApi({
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
        password_confirmation: passwordData.new_password_confirmation
      });
      successAlert("Password changed successfully!");
      setPasswordData({current_password:"", new_password:"", new_password_confirmation:"", showCurrent:false, showNew:false, showConfirm:false});
    } catch (error) {
      console.error(error);
      errorAlert("Failed to change password.");
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="dashboard-profile">
      <h1 className="dp-title">Profile Settings</h1>

      {/* PROFILE CARD */}
      <div className="dp-card">
        <form className="dp-form" onSubmit={handleUpdateProfile}>
          <label>Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>

          <label>Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>

          <label>Country:
            <input type="text" name="country" value={formData.country} readOnly />
          </label>

          <label>City:
            <input type="text" name="city" value={formData.city} readOnly />
          </label>

          <label>Provider Type:
            <input type="text" name="provider_type" value={formData.provider_type} onChange={handleChange} />
          </label>

          <button type="submit" disabled={updating}>{updating ? "Updating..." : "Update Profile"}</button>
        </form>
      </div>

      {/* CHANGE PASSWORD CARD */}
      <div className="dp-card">
        <h2 className="dp-subtitle">Change Password</h2>
        <form className="dp-form" onSubmit={handleChangePassword} dir="rtl">

          <label>
            Current Password:
            <div className="password-wrapper">
              <input type={passwordData.showCurrent ? "text" : "password"} name="current_password" value={passwordData.current_password} onChange={handlePasswordChange}/>
              <FontAwesomeIcon
                icon={passwordData.showCurrent ? faEyeSlash : faEye}
                className="toggle-eye"
                onClick={()=>togglePassword("showCurrent")}
              />
            </div>
          </label>

          <label>
            New Password:
            <div className="password-wrapper">
              <input type={passwordData.showNew ? "text" : "password"} name="new_password" value={passwordData.new_password} onChange={handlePasswordChange}/>
              <FontAwesomeIcon
                icon={passwordData.showNew ? faEyeSlash : faEye}
                className="toggle-eye"
                onClick={()=>togglePassword("showNew")}
              />
            </div>
          </label>

          <label>
            Confirm New Password:
            <div className="password-wrapper">
              <input type={passwordData.showConfirm ? "text" : "password"} name="new_password_confirmation" value={passwordData.new_password_confirmation} onChange={handlePasswordChange}/>
              <FontAwesomeIcon
                icon={passwordData.showConfirm ? faEyeSlash : faEye}
                className="toggle-eye"
                onClick={()=>togglePassword("showConfirm")}
              />
            </div>
          </label>

          <button type="submit" disabled={passwordLoading}>{passwordLoading ? "Changing..." : "Change Password"}</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardProfile;