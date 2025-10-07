import React, { useState } from "react";
import "./Appointments.css";

export default function Appointment() {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Smith", type: "Check-up", date: "2025-10-07", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Emily Davis", type: "Consultation", date: "2025-10-07", time: "11:30 AM", status: "In Progress" },
    { id: 3, patient: "Robert Wilson", type: "Follow-up", date: "2025-10-07", time: "09:15 AM", status: "Completed" },
  ]);

  return (
    <main className="appointments-page">
      <div className="appointments-header">
        <h1>Appointments</h1>
        <p>Here is the list of all scheduled appointments.</p>
      </div>

      <div className="appointments-cards">
        {appointments.map((app) => (
          <div className="appointment-card" key={app.id}>
            <div className="appointment-avatar">{app.patient.charAt(0)}</div>
            <div className="appointment-info">
              <h3>{app.patient}</h3>
              <p>Type: {app.type}</p>
              <p>Date: {app.date}</p>
              <p>Time: {app.time}</p>
            </div>
            <div className={`appointment-status ${app.status.replace(/\s/g, "-").toLowerCase()}`}>
              {app.status}
            </div>
            <div className="appointment-actions">
              <button className="view-btn">View</button>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
