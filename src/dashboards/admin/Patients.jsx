import React from "react";
import "./Patients.css";

export default function Patients() {
  const patientsList = [
    { id: 1, name: "John Smith", age: 35, gender: "Male", contact: "9876543210", condition: "Flu" },
    { id: 2, name: "Emily Davis", age: 28, gender: "Female", contact: "9876543211", condition: "Check-up" },
    { id: 3, name: "Robert Wilson", age: 50, gender: "Male", contact: "9876543212", condition: "Diabetes" },
    { id: 4, name: "Sophia Lee", age: 22, gender: "Female", contact: "9876543213", condition: "Allergy" },
  ];

  return (
    <div className="patients-page">
      <div className="patients-header">
        <h1>Patients</h1>
        <p>Overview of patients currently registered in the hospital.</p>
      </div>

      <div className="patients-cards">
        {patientsList.map((patient) => (
          <div className="patient-card" key={patient.id}>
            <div className="patient-avatar">
              {patient.name.charAt(0)}
            </div>
            <div className="patient-info">
              <h3>{patient.name}</h3>
              <p><strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Condition:</strong> {patient.condition}</p>
              <p><strong>Contact:</strong> {patient.contact}</p>
            </div>
            <div className="patient-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
