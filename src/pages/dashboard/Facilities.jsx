// src/pages/dashboard/Facilities.jsx

import React, { useEffect, useState } from "react";
import { getDocumentsApi } from "../../api/facilityApi";
import "./Facilities.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Facilities = () => {
    const { t } = useTranslation();

    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFacilities();
    }, []);

    const loadFacilities = async () => {
        try {
            const res = await getDocumentsApi();

            if (res.status) {
                setFacilities(res.data || []);
            }

        } catch (error) {
            console.error("Facilities error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="facilities-page">

            <div className="facilities-header">

                <h2 className="address_step">{t("sidebar.facilities")}</h2>

                <Link
                    to="/dashboard/facilities/create"
                    className="add-btn"
                >
                    + {t("registration.startNow")}
                </Link>

            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="table-scroll">
                    <table className="facilities-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>{t("facility.name")}</th>
                                <th>{t("facility.email")}</th>
                                <th>{t("facility.phone")}</th>
                                <th>{t("facility.status")}</th>
                            </tr>
                        </thead>

                        <tbody>
                            {facilities.map((f) => (
                                <tr key={f.id}>
                                    <td>{f.id}</td>
                                    <td>{f.name}</td>
                                    <td>{f.email}</td>
                                    <td>{f.phone}</td>
                                    <td>{f.status}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}

        </div>
    );
};

export default Facilities;