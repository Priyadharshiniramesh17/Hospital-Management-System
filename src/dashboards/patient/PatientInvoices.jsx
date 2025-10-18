import React, { useState } from "react";
import "./PatientInvoices.css";

export default function PatientInvoices() {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    { id: "#INV0025", description: "General Consultation", created: "30 Apr 2025", due: "30 Apr 2025", amount: "$800", status: "Paid" },
    { id: "#INV0024", description: "Dental Cleaning", created: "15 Apr 2025", due: "15 Apr 2025", amount: "$930", status: "Partially Paid" },
    { id: "#INV0023", description: "Eye Checkup", created: "02 Apr 2025", due: "02 Apr 2025", amount: "$850", status: "Paid" },
    { id: "#INV0022", description: "X-Ray", created: "27 Mar 2025", due: "27 Mar 2025", amount: "$700", status: "Paid" },
    { id: "#INV0021", description: "Physiotherapy Session", created: "12 Mar 2025", due: "12 Mar 2025", amount: "$650", status: "Partially Paid" },
    { id: "#INV0020", description: "Cardiac Screening", created: "05 Mar 2025", due: "05 Mar 2025", amount: "$430", status: "UnPaid" },
    { id: "#INV0019", description: "Skin Allergy Test", created: "24 Feb 2025", due: "24 Feb 2025", amount: "$300", status: "Paid" },
    { id: "#INV0018", description: "Blood Test", created: "16 Feb 2025", due: "16 Feb 2025", amount: "$450", status: "Partially Paid" },
    { id: "#INV0017", description: "ENT Consultation", created: "01 Feb 2025", due: "01 Feb 2025", amount: "$750", status: "Paid" },
    { id: "#INV0016", description: "Nutrition Counseling", created: "25 Jan 2025", due: "25 Jan 2025", amount: "$800", status: "UnPaid" },
  ];

  const filteredInvoices = invoices.filter(
    inv =>
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-invoices-page">
      <h2>Invoices</h2>
      <p>Total Invoices: {invoices.length}</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search invoices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="invoices-table">
        <div className="table-header">
          <span>Invoice ID</span>
          <span>Description</span>
          <span>Created Date</span>
          <span>Due Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {filteredInvoices.map((inv, idx) => (
          <div className="table-row" key={idx}>
            <span>{inv.id}</span>
            <span>{inv.description}</span>
            <span>{inv.created}</span>
            <span>{inv.due}</span>
            <span>{inv.amount}</span>
            <span className={`status ${inv.status.replace(" ", "-").toLowerCase()}`}>
              {inv.status}
            </span>
          </div>
        ))}

        {filteredInvoices.length === 0 && (
          <div className="no-results">No invoices found.</div>
        )}
      </div>
    </div>
  );
}
