import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoctorApi } from "../../api/doctorApi";
import { getDoctorDocumentsApi } from "../../api/doctorDocumentsApi";
import { useTranslation } from "react-i18next";
import "./DoctorDetails.css";

const DoctorDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [doctor, setDoctor] = useState(null);
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDoctor();
        loadDocuments();
    }, []);

    const loadDoctor = async () => {

        try {

            const res = await getDoctorApi(id);

            console.log("Doctor:", res);

            setDoctor(res.data || res);

        } catch (error) {

            console.error("Doctor load error:", error);

        }

    };

    const loadDocuments = async () => {

        try {

            const res = await getDoctorDocumentsApi(id);

            console.log("Documents:", res);

            const docs =
                Array.isArray(res) ? res :
                    Array.isArray(res.data) ? res.data :
                        Array.isArray(res.data?.data) ? res.data.data :
                            [];

            setDocuments(docs);

        } catch (error) {

            console.error("Documents error:", error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) return <p>Loading...</p>;

    if (!doctor) return <p>Doctor not found</p>;

    return (

        <div className="doctor-details">

            <div className="details-header">

                <h2 className="address_step">{doctor.name}</h2>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard/doctors")}
                >
                    {t("common.back")}
                </button>

            </div>

            <div className="details-grid">

                <div className="details-card">

                    <h3>{t("doctor.info")}</h3>

                    <p>
                        <strong>ID:</strong> {doctor.id}
                    </p>

                    <p>
                        <strong>{t("doctor.add.email")}:</strong> {doctor.email}
                    </p>

                    <p>
                        <strong>{t("doctor.add.phone")}:</strong> {doctor.phone}
                    </p>

                    <p>
                        <strong>{t("doctor.add.specialty")}:</strong>{" "}
                        {doctor.specialties?.map(s => s.name).join(", ") || "-"}
                    </p>

                </div>

                <div className="details-card">

                    <h3>{t("doctor.add.documents")}</h3>

                    {documents.length === 0 ? (

                        <p>No documents</p>

                    ) : (

                        <ul className="documents-list">

                            {documents.map(doc => (

                                <li key={doc.id}>

                                    <span>{doc.type}</span>

                                    <a
                                        href={doc.file}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View
                                    </a>

                                </li>

                            ))}

                        </ul>

                    )}

                </div>

            </div>

        </div>

    );

};

export default DoctorDetails;