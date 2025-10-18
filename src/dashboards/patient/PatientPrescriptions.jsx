import React, { useState } from "react";
import "./PatientPrescriptions.css";

export default function PatientPrescriptions() {
  const [searchTerm, setSearchTerm] = useState("");

  const prescriptions = [
    { id: "#PRE0025", doctor: "Dr. Mick Thompson", specialty: "Cardiologist", date: "30 Apr 2025" },
    { id: "#PRE0024", doctor: "Dr. Sarah Johnson", specialty: "Orthopedic Surgeon", date: "15 Apr 2025" },
    { id: "#PRE0023", doctor: "Dr. Emily Carter", specialty: "Pediatrician", date: "02 Apr 2025" },
    { id: "#PRE0022", doctor: "Dr. David Lee", specialty: "Gynecologist", date: "27 Mar 2025" },
    { id: "#PRE0021", doctor: "Dr. Anna Kim", specialty: "Psychiatrist", date: "12 Mar 2025" },
    { id: "#PRE0020", doctor: "Dr. John Smith", specialty: "Neurosurgeon", date: "05 Mar 2025" },
    { id: "#PRE0019", doctor: "Dr. Lisa White", specialty: "Oncologist", date: "24 Feb 2025" },
    { id: "#PRE0018", doctor: "Dr. Patricia Brown", specialty: "Pulmonologist", date: "16 Feb 2025" },
    { id: "#PRE0017", doctor: "Dr. Rachel Green", specialty: "Urologist", date: "01 Feb 2025" },
    { id: "#PRE0016", doctor: "Dr. Michael Smith", specialty: "Cardiologist", date: "25 Jan 2025" },
  ];

  const filteredPrescriptions = prescriptions.filter(p =>
    p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-prescriptions-page">
      <h2>Prescriptions</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search prescription..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="prescriptions-table">
        <div className="table-header">
          <span>Prescription ID</span>
          <span>Doctor Name</span>
          <span>Specialty</span>
          <span>Prescribed On</span>
          <span>Actions</span>
        </div>

        {filteredPrescriptions.map((p, idx) => (
          <div className="table-row" key={idx}>
            <span>{p.id}</span>
            <span>{p.doctor}</span>
            <span>{p.specialty}</span>
            <span>{p.date}</span>
            <span className="action-buttons">
              <button className="download-btn">Download</button>
            </span>
          </div>
        ))}

        {filteredPrescriptions.length === 0 && (
          <div className="no-results">No prescriptions found.</div>
        )}
      </div>
    </div>
  );
}
