import React, { useState } from "react";
import "./Prescriptions.css";

export default function Prescriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: "John Smith", doctor: "Dr. Naresh", date: "2025-10-07", medicine: "Paracetamol 500mg", dosage: "2 times a day", status: "Active" },
    { id: 2, patient: "Emily Davis", doctor: "Dr. Neha", date: "2025-10-06", medicine: "Ibuprofen 400mg", dosage: "3 times a day", status: "Completed" },
    { id: 3, patient: "Robert Wilson", doctor: "Dr. Ravi", date: "2025-10-05", medicine: "Amoxicillin 250mg", dosage: "2 times a day", status: "Pending" }
  ]);

  const filteredPrescriptions = prescriptions
    .filter((presc) => {
      const matchesSearch =
        presc.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        presc.doctor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || presc.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "Newest") return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });

  return (
    <main className="prescriptions-page">
      <div className="prescriptions-header">
        <h1>Prescriptions</h1>
        <p>Manage and view all prescriptions issued to patients.</p>
      </div>

      {/* Search, Filter & Sort */}
      <div className="prescriptions-filter">
        <input
          type="text"
          placeholder="Search by patient or doctor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Newest">Sort by Newest</option>
          <option value="Oldest">Sort by Oldest</option>
        </select>
      </div>

      <div className="prescriptions-cards">
        {filteredPrescriptions.length ? (
          filteredPrescriptions.map((presc) => (
            <div className="prescription-card" key={presc.id}>
              <div className="prescription-avatar">{presc.patient.charAt(0)}</div>
              <div className="prescription-info">
                <h3>{presc.patient}</h3>
                <p><strong>Doctor:</strong> {presc.doctor}</p>
                <p><strong>Date:</strong> {presc.date}</p>
                <p><strong>Medicine:</strong> {presc.medicine}</p>
                <p><strong>Dosage:</strong> {presc.dosage}</p>
              </div>
              <div className={`prescription-status ${presc.status.replace(/\s/g, "-").toLowerCase()}`}>
                {presc.status}
              </div>
              <div className="prescription-actions">
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-prescriptions">No prescriptions found.</p>
        )}
      </div>
    </main>
  );
}
