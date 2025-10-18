import React, { useState } from "react";
import "./Staff.css";

export default function Staff() {
  const [staffMembers, setStaffMembers] = useState([
    { id: 1, name: "Dr. Naresh Kumar", role: "Doctor", department: "Cardiology", email: "naresh@example.com" },
    { id: 2, name: "Nisha Sharma", role: "Nurse", department: "Pediatrics", email: "nisha@example.com" },
    { id: 3, name: "Ramesh Kumar", role: "Technician", department: "Radiology", email: "ramesh@example.com" },
    { id: 4, name: "Priya Ramesh", role: "Receptionist", department: "Front Desk", email: "priya@example.com" },
  ]);

  return (
    <main className="staff-page">
      <header className="staff-header">
        <h1>Staff Management</h1>
        <p>Manage hospital staff details including roles, departments, and contacts.</p>
      </header>

      <section className="staff-cards">
        {staffMembers.map((staff) => (
          <div className="staff-card" key={staff.id}>
            <div className="staff-avatar">{staff.name[0]}</div>
            <div className="staff-info">
              <h3>{staff.name}</h3>
              <p>Role: {staff.role}</p>
              <p>Department: {staff.department}</p>
              <p>Email: {staff.email}</p>
            </div>
            <div className="staff-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
