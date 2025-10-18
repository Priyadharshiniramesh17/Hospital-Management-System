import React from "react";
import "./PatientAppointment.css";

export default function PatientAppointment() {
  const appointments = [
    {
      name: "Dr. Mick Thompson",
      specialty: "Cardiologist",
      date: "27 May 2025 - 09:30 AM",
      fees: "$400",
      mode: "Online",
      status: "Checked Out",
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Orthopedic Surgeon",
      date: "26 May 2025 - 10:15 AM",
      fees: "$370",
      mode: "Online",
      status: "Checked In",
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Pediatrician",
      date: "25 May 2025 - 02:40 PM",
      fees: "$450",
      mode: "In-Person",
      status: "Cancelled",
    },
    {
      name: "Dr. David Lee",
      specialty: "Gynecologist",
      date: "24 May 2025 - 11:30 AM",
      fees: "$310",
      mode: "In-Person",
      status: "Scheduled",
    },
    {
      name: "Dr. Anna Kim",
      specialty: "Psychiatrist",
      date: "23 May 2025 - 04:10 PM",
      fees: "$400",
      mode: "Online",
      status: "Scheduled",
    },
  ];

  return (
    <div className="patient-appointments">
      <h2>My Appointments</h2>

      <div className="appointment-table-wrapper">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialty</th>
              <th>Date & Time</th>
              <th>Consultation Fees</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((ap, idx) => (
              <tr key={idx}>
                <td>{ap.name}</td>
                <td>{ap.specialty}</td>
                <td>{ap.date}</td>
                <td>{ap.fees}</td>
                <td>{ap.mode}</td>
                <td>
                  <span className={`status ${ap.status.toLowerCase().replace(" ", "-")}`}>
                    {ap.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-btn view">View</button>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
