import React, { useState } from "react";
import "./DoctorInvoices.css";

export default function DoctorInvoices({ darkMode }) {
  const [invoices] = useState([
    { id: "#d01", name: "Howard Tanner", phone: "(+12)85-4521-7568", amount: "$253", date: "23th Dec 2020", status: "Unpaid" },
    { id: "#d02", name: "Wendy Filson", phone: "(+12)85-4521-7568", amount: "$482", date: "23th Dec 2020", status: "Paid" },
    { id: "#d03", name: "Faye Bridger", phone: "(+12)85-4521-7568", amount: "$546", date: "23th Dec 2020", status: "Unpaid" },
    { id: "#d04", name: "Ronald Curtis", phone: "(+12)85-4521-7568", amount: "$154", date: "23th Dec 2020", status: "Unpaid" },
    { id: "#d05", name: "Melissa Hibner", phone: "(+12)85-4521-7568", amount: "$458", date: "23th Dec 2020", status: "Paid" },
    { id: "#d06", name: "Randall Case", phone: "(+12)85-4521-7568", amount: "$548", date: "23th Dec 2020", status: "Paid" },
    { id: "#d07", name: "Jerry Morena", phone: "(+12)85-4521-7568", amount: "$658", date: "23th Dec 2020", status: "Unpaid" },
    { id: "#d08", name: "Lester McNally", phone: "(+12)85-4521-7568", amount: "$457", date: "23th Dec 2020", status: "Unpaid" },
    { id: "#d09", name: "Christopher Burrell", phone: "(+12)85-4521-7568", amount: "$586", date: "23th Dec 2020", status: "Paid" },
    { id: "#d10", name: "Mary Skeens", phone: "(+12)85-4521-7568", amount: "$325", date: "23th Dec 2020", status: "Unpaid" },
  ]);

  // Dummy handlers for buttons
  const handleView = (invoice) => {
    alert(`Viewing Invoice: ${invoice.id}\nName: ${invoice.name}\nAmount: ${invoice.amount}`);
  };

  const handlePrint = (invoice) => {
    alert(`Printing Invoice: ${invoice.id}`);
    window.print(); // (can later be replaced by actual print layout)
  };

  return (
    <div className={`doctor-dashboard ${darkMode ? "dark" : ""}`}>
      <h2>Invoice List</h2>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Generate (Dt.)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, idx) => (
            <tr key={idx}>
              <td>{inv.id}</td>
              <td>{inv.name}</td>
              <td>{inv.phone}</td>
              <td>{inv.amount}</td>
              <td>{inv.date}</td>
              <td>
                <span className={`status ${inv.status.toLowerCase()}`}>
                  {inv.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="btn view-btn"
                    onClick={() => handleView(inv)}
                  >
                    View
                  </button>
                  <button
                    className="btn print-btn"
                    onClick={() => handlePrint(inv)}
                  >
                    Print
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-footer">
        <p>Showing 1 - 10 out of 50</p>
        <div className="pagination">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
