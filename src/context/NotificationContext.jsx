import React, { createContext, useContext, useState } from "react";
import Notification from "../components/DashboardComponent/Notification";

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ type: "", message: "" });

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification({ type: "", message: "" }), 3000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification
        type={notification.type}
        message={notification.message}
        clear={() => setNotification({ type: "", message: "" })}
      />
    </NotificationContext.Provider>
  );
};