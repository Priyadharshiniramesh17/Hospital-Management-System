import React, { useState } from "react";
import "./Record.css";

export default function Record() {
  const [records, setRecords] = useState([
    { id: 1, patient: "John Smith", type: "Check-up", doctor: "Dr. Naresh", date: "2025-10-07", status: "Completed" },
    { id: 2, patient: "Emily Davis", type: "Blood Test", doctor: "Dr. Priya", date: "2025-10-06", status: "Pending" },
    { id: 3, patient: "Robert Wilson", type: "X-Ray", doctor: "Dr. Ramesh", date: "2025-10-05", status: "Completed" },
    { id: 4, patient: "Nisha Sharma", type: "MRI Scan", doctor: "Dr. Naresh", date: "2025-10-04", status: "In Progress" },
  ]);

  return (
    <main className="records-page">
      <header className="records-header">
        <h1>Hospital Records</h1>
        <p>View and manage patient records, appointments, and their statuses.</p>
      </header>

      <section className="records-table">
        <div className="table-header">
          <span>Patient</span>
          <span>Type</span>
          <span>Doctor</span>
          <span>Date</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {records.map((rec) => (
          <div className="table-row" key={rec.id}>
            <span>{rec.patient}</span>
            <span>{rec.type}</span>
            <span>{rec.doctor}</span>
            <span>{rec.date}</span>
            <span className={`status ${rec.status.replace(/\s/g, "-").toLowerCase()}`}>{rec.status}</span>
            <span>
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
