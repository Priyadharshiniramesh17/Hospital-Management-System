import React, { useState } from "react";
import "./Pharmacy.css";

export default function Pharmacy() {
  const [medicines, setMedicines] = useState([
    { name: "Paracetamol", quantity: 120, expiry: "2025-12-31", price: "$5" },
    { name: "Amoxicillin", quantity: 80, expiry: "2025-10-15", price: "$12" },
    { name: "Ibuprofen", quantity: 60, expiry: "2025-11-20", price: "$8" },
    { name: "Vitamin C", quantity: 200, expiry: "2026-01-10", price: "$10" },
  ]);

  return (
    <main className="pharmacy-page">
      <section className="pharmacy-header">
        <h1>Pharmacy Inventory</h1>
        <p>Monitor stock, expiry dates, and prices of medicines.</p>
      </section>

      <section className="pharmacy-cards">
        {medicines.map((med, idx) => (
          <div className="medicine-card" key={idx}>
            <div className="medicine-top">
              <div className="medicine-avatar">{med.name.charAt(0)}</div>
              <h3>{med.name}</h3>
            </div>
            <div className="medicine-info">
              <p><strong>Quantity:</strong> {med.quantity}</p>
              <p><strong>Expiry:</strong> {med.expiry}</p>
              <p><strong>Price:</strong> {med.price}</p>
            </div>
            <div className="stock-bar">
              <div 
                className="stock-fill" 
                style={{ width: `${Math.min(med.quantity, 200)/2}%` }}
              ></div>
            </div>
            <div className="medicine-actions">
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
