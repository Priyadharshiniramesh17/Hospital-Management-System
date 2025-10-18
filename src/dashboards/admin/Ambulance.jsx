import React, { useState } from "react";
import "./ambulance.css";

export default function Ambulance() {
  const [ambulances] = useState([
    { id: "AMB001", driver: "John Doe", status: "Available", location: "City Center" },
    { id: "AMB002", driver: "Emily Smith", status: "On Duty", location: "North Hospital" },
    { id: "AMB003", driver: "Robert Wilson", status: "Maintenance", location: "Garage" },
    { id: "AMB004", driver: "Sarah Johnson", status: "Available", location: "South Hospital" },
  ]);

  return (
    <main className="ambulance-page">
      <section className="ambulance-header">
        <h1>Ambulances</h1>
        <p>Manage all hospital ambulances and track their availability.</p>
      </section>

      <section className="ambulance-cards">
        {ambulances.length > 0 ? (
          ambulances.map((amb) => (
            <div className="ambulance-card" key={amb.id}>
              <div className="ambulance-avatar">{amb.id.slice(-3)}</div>
              <div className="ambulance-info">
                <h3>{amb.id}</h3>
                <p><strong>Driver:</strong> {amb.driver}</p>
                <p><strong>Status:</strong> <span className={`ambulance-status ${amb.status.replace(/\s/g, "-").toLowerCase()}`}>{amb.status}</span></p>
                <p><strong>Location:</strong> {amb.location}</p>
              </div>
              <div className="ambulance-actions">
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-ambulances">No ambulances available.</p>
        )}
      </section>
    </main>
  );
}
