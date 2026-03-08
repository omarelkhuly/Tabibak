// src/components/Header.jsx
import React from "react";

const Header = ({ handleLogout }) => {
  return (
    <header className="dashboard-header">
      <div className="user-menu">
        <span>Welcome, User</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;