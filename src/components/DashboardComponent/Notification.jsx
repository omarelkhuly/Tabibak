// src/components/DashboardComponent/Notification.jsx
import React, { useEffect } from "react";
import "./notification.css";

const Notification = ({ type = "", message = "", clear = () => { } }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clear();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;