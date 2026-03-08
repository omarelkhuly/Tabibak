// src/pages/dashboard/DashboardHome.jsx
import React from "react";

const DashboardHome = () => {
    return (
        <div className="dashboard-page">
            <h1>Welcome to your Dashboard</h1>
            <p>This is the home page of your dashboard.</p>

            <div className="cards-container">
                <div className="card">
                    <h3>Total Users</h3>
                    <p>120</p>
                </div>
                <div className="card">
                    <h3>Total Orders</h3>
                    <p>85</p>
                </div>
                <div className="card">
                    <h3>Revenue</h3>
                    <p>$12,400</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;