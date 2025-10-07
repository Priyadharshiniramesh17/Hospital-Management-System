import React from "react";
import { Outlet } from "react-router-dom"; // For nested routes
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-layout">
      <TopNavbar />
      <Sidebar />
      <div className="main-content-area">
        <Outlet /> {/* Nested route content renders here */}
      </div>
    </div>
  );
}
