import React from "react";
import "./Department.css";

export default function Department() {
  const departments = [
    { name: "Cardiology", inCharge: "Dr. John Smith", staff: 12, description: "Heart and blood vessel care." },
    { name: "Neurology", inCharge: "Dr. Emily Davis", staff: 8, description: "Brain and nervous system treatment." },
    { name: "Orthopedics", inCharge: "Dr. Robert Wilson", staff: 10, description: "Bones, joints, and muscles care." },
    { name: "Pediatrics", inCharge: "Dr. Sophia Lee", staff: 9, description: "Child health and development." },
  ];

  return (
    <main className="department-page">
      <section className="department-header">
        <h1>Hospital Departments</h1>
        <p>Overview of all departments and their details.</p>
      </section>

      <section className="department-cards">
        {departments.map((dept, idx) => (
          <div className="department-card" key={idx}>
            <h3>{dept.name}</h3>
            <p><strong>In-Charge:</strong> {dept.inCharge}</p>
            <p><strong>Staff Members:</strong> {dept.staff}</p>
            <p className="dept-desc">{dept.description}</p>
            <div className="department-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
