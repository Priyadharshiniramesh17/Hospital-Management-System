import React, { useState } from "react";
import "./Billing.css";

export default function Billing() {
  const [bills, setBills] = useState([
    { patient: "John Smith", billNo: "B001", amount: 250, status: "Paid", date: "2025-09-25" },
    { patient: "Emily Davis", billNo: "B002", amount: 500, status: "Pending", date: "2025-09-24" },
    { patient: "Robert Wilson", billNo: "B003", amount: 750, status: "Paid", date: "2025-09-23" },
    { patient: "Sophia Lee", billNo: "B004", amount: 600, status: "Pending", date: "2025-09-22" },
  ]);

  return (
    <main className="billing-page">
      <section className="billing-header">
        <h1>Billing Dashboard</h1>
        <p>Manage patient bills and payment status.</p>
      </section>

      <section className="billing-cards">
        {bills.map((bill, idx) => (
          <div className="bill-card" key={idx}>
            <h3>{bill.patient}</h3>
            <p><strong>Bill No:</strong> {bill.billNo}</p>
            <p><strong>Amount:</strong> ${bill.amount}</p>
            <p><strong>Date:</strong> {bill.date}</p>
            <p className={`status ${bill.status.toLowerCase()}`}>{bill.status}</p>
            <div className="bill-actions">
              <button className="btn view-btn">View</button>
              {bill.status === "Pending" && <button className="btn pay-btn">Pay</button>}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
