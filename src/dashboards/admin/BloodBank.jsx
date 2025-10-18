import React, { useState } from "react";
import "./BloodBank.css";

export default function BloodBank() {
  const [bloodData, setBloodData] = useState([
    { type: "A+", units: 25, lastDonated: "2025-09-25" },
    { type: "A-", units: 10, lastDonated: "2025-09-20" },
    { type: "B+", units: 30, lastDonated: "2025-09-22" },
    { type: "B-", units: 5, lastDonated: "2025-09-18" },
    { type: "AB+", units: 12, lastDonated: "2025-09-21" },
    { type: "AB-", units: 3, lastDonated: "2025-09-15" },
    { type: "O+", units: 40, lastDonated: "2025-09-23" },
    { type: "O-", units: 8, lastDonated: "2025-09-19" },
  ]);

  return (
    <main className="bloodbank-page">
      <section className="bloodbank-header">
        <h1>Blood Bank Inventory</h1>
        <p>Track available blood units and last donation dates.</p>
      </section>

      <section className="bloodbank-cards">
        {bloodData.map((blood, idx) => (
          <div className="blood-card" key={idx}>
            <div className="blood-top">
              <div className={`blood-avatar ${blood.type.replace('+','plus').replace('-','minus')}`}>
                {blood.type}
              </div>
              <h3>{blood.type} Blood</h3>
            </div>
            <div className="blood-info">
              <p><strong>Units:</strong> {blood.units}</p>
              <p><strong>Last Donated:</strong> {blood.lastDonated}</p>
            </div>
            <div className="blood-stock-bar">
              <div
                className="blood-fill"
                style={{ width: `${Math.min(blood.units, 50) * 2}%` }}
              ></div>
            </div>
            <div className="blood-actions">
              <button className="btn view-btn">View</button>
              <button className="btn edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
