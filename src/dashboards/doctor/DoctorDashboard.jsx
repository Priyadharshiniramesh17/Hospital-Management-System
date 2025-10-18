import React from "react";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";
import DoctorTopNavbar from "./DoctorTopNavbar";
import "./DoctorDashboard.css";

export default function DoctorDashboard() {
  return (
    <div className="doctor-dashboard-layout">
      {/* Top Navbar */}
      <DoctorTopNavbar />

      {/* Body with Sidebar + Main Content */}
      <div className="doctor-dashboard-body">
        <DoctorSidebar />

        {/* Main content area */}
        <main className="doctor-dashboard-content">
          <Outlet /> {/* Nested routes will render here */}
        </main>
      </div>
    </div>
  );
}
