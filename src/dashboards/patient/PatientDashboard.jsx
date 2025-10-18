import React from "react";
import { Outlet } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";
import PatientTopNavbar from "./PatientTopNavbar";

import "./PatientDashboard.css";

export default function PatientDashboard() {
  return (
    <div className="patient-dashboard-layout">
      {/* Top Navbar */}
      <PatientTopNavbar />

      {/* Body with Sidebar + Main Content */}
      <div className="patient-dashboard-body">
        <PatientSidebar />

        {/* Main content area */}
        <main className="patient-dashboard-content">
          <Outlet /> {/* Nested routes will render here */}
        </main>
      </div>
    </div>
  );
}
