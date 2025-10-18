import React, { useState } from "react";
import "./PatientDoctors.css";

export default function PatientDoctors() {
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    { name: "Dr. Mick Thompson", specialty: "Cardiologist", phone: "+1 41245 54132", lastVisit: "30 Apr 2025" },
    { name: "Dr. Sarah Johnson", specialty: "Orthopedic Surgeon", phone: "+1 54554 54789", lastVisit: "15 Apr 2025" },
    { name: "Dr. Emily Carter", specialty: "Pediatrician", phone: "+1 43554 54985", lastVisit: "02 Apr 2025" },
    { name: "Dr. David Lee", specialty: "Gynecologist", phone: "+1 41245 54124", lastVisit: "27 Mar 2025" },
    { name: "Dr. Anna Kim", specialty: "Psychiatrist", phone: "+1 41245 23143", lastVisit: "12 Mar 2025" },
    { name: "Dr. John Smith", specialty: "Neurosurgeon", phone: "+1 51247 56574", lastVisit: "05 Mar 2025" },
    { name: "Dr. Lisa White", specialty: "Oncologist", phone: "+1 23423 54132", lastVisit: "30 Apr 2025" },
    { name: "Dr. Patricia Brown", specialty: "Pulmonologist", phone: "+1 51425 21498", lastVisit: "16 Feb 2025" },
    { name: "Dr. Rachel Green", specialty: "Urologist", phone: "+1 45214 98741", lastVisit: "01 Feb 2025" },
    { name: "Dr. Michael Smith", specialty: "Cardiologist", phone: "+1 41245 32540", lastVisit: "25 Jan 2025" },
  ];

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.phone.includes(searchTerm)
  );

  return (
    <div className="patient-doctors-page">
      <h2>Doctors</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search doctor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="doctors-table">
        <div className="table-header">
          <span>Doctor Name</span>
          <span>Specialty</span>
          <span>Phone</span>
          <span>Last Visit</span>
          <span>Actions</span>
        </div>

        {filteredDoctors.map((doc, idx) => (
          <div className="table-row" key={idx}>
            <span>{doc.name}</span>
            <span>{doc.specialty}</span>
            <span>{doc.phone}</span>
            <span>{doc.lastVisit}</span>
            <span className="action-buttons">
              <button className="view-btn">View</button>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </span>
          </div>
        ))}

        {filteredDoctors.length === 0 && (
          <div className="no-results">No doctors found.</div>
        )}
      </div>
    </div>
  );
}
