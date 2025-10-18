import React from "react";
import "./Doctors.css";

export default function Doctors() {
  const doctorsList = [
    { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", contact: "9876543210", patients: 120 },
    { id: 2, name: "Dr. Emily Davis", specialization: "Dermatologist", contact: "9876543211", patients: 80 },
    { id: 3, name: "Dr. Robert Wilson", specialization: "Neurologist", contact: "9876543212", patients: 95 },
    { id: 4, name: "Dr. Sophia Lee", specialization: "Pediatrician", contact: "9876543213", patients: 110 },
  ];

  return (
    <div className="doctors-page">
      <div className="doctors-header">
        <h1>Doctors</h1>
        <p>List of doctors currently available in the hospital.</p>
      </div>

      <div className="doctors-cards">
        {doctorsList.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <div className="doctor-avatar">
              {doctor.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p><strong>Specialization:</strong> {doctor.specialization}</p>
              <p><strong>Patients:</strong> {doctor.patients}</p>
              <p><strong>Contact:</strong> {doctor.contact}</p>
            </div>
            <div className="doctor-actions">
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
