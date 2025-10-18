import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [selectedDashboard, setSelectedDashboard] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenDashboard = () => {
    if (selectedDashboard) {
      navigate(`/admin/${selectedDashboard}`); // Navigate to /admin/doctors, /admin/patients, etc.
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

   const menuItems = [
    { name: "Dashboard", link: "/admin", image: "https://www.creativefabrica.com/wp-content/uploads/2018/12/Graph-icon-vector-by-Hoeda80-1-580x386.jpg" },
    { name: "Doctors", link: "/admin/doctors", image: "https://www.shutterstock.com/image-vector/doctor-icon-stethoscope-isolated-vector-600nw-2409319497.jpg" },
    { name: "Patients", link: "/admin/patients", image: "https://thumbs.dreamstime.com/b/patient-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133732128.jpg" },
    { name: "Appointments", link: "/admin/appointments", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuQuyaYdxFfGXx3k6jISI1od75s8KviHT3A&s" },
    { name: "Prescriptions", link: "/admin/prescriptions", image: "https://img.freepik.com/premium-vector/medical-report-icon-design-vector-template_1146812-3393.jpg" },
    { name: "Ambulance", link: "/admin/ambulance", image: "https://static.vecteezy.com/system/resources/thumbnails/001/511/623/small/ambulance-outline-icon-free-vector.jpg" },
    { name: "Pharmacy", link: "/admin/pharmacy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwB5GcslDtzcNw1b__R_rnHhHFlr5Z-1__yKbYiDd1ZVkOWWFco9Ta3PgI63a_ly6V7mM&usqp=CAU" },
    { name: "Blood Bank", link: "/admin/blood-bank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6hC0qbSLwKvfUxy0tA4rcI6NpV9E3nZaHg9tMIMeVeJJdKeEtrcdXwkcd2mPkvxAjPY&usqp=CAU" },
    { name: "Billing", link: "/admin/billing", image: "https://t3.ftcdn.net/jpg/15/16/72/58/360_F_1516725809_2cZQRsVa5TO8E53S59OTV5HQ89nuNGZC.jpg" },
    { name: "Departments", link: "/admin/departments", image: "https://www.shutterstock.com/image-vector/hospital-building-icon-line-art-600nw-1567003279.jpg" },
    { name: "Inventory", link: "/admin/inventory", image: "https://thumbs.dreamstime.com/b/stacked-shipping-boxes-icon-delivery-storage-concept-minimalist-design-three-simple-black-outline-white-represents-moving-388732725.jpg" },
    { name: "Staff", link: "/admin/staff", image: "https://www.shutterstock.com/image-vector/doctor-iconvector-illustration-isolated-on-260nw-2232451089.jpg" },
    { name: "Record", link: "/admin/record", image: "https://png.pngtree.com/png-clipart/20230924/original/pngtree-flatdesigned-icon-of-medical-record-with-laptop-for-patient-isolated-vector-png-image_12848085.png" },
    { name: "Room Allotment", link: "/admin/room-allotment", image: "https://static.vecteezy.com/system/resources/previews/050/982/418/non_2x/hospital-bed-icon-medical-icon-medical-sign-medical-imaging-vector.jpg" },
    { name: "Reviews", link: "/admin/reviews", image: "https://static.vecteezy.com/system/resources/previews/015/900/003/non_2x/quality-value-icon-outline-style-vector.jpg" },
    { name: "Feedback", link: "/admin/feedback", image: "https://img.freepik.com/premium-vector/feedback-icon-symbol-white-background_268104-9279.jpg" },
    { name: "Reports", link: "/admin/reports", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeRx6GPmlieT6p894OiJ44BDycsEd5d9FKfaQ_2u-N3CJsFSrAOkh6LfLhWiaguMS9Os&usqp=CAU" },
    { name: "Settings", link: "/admin/settings", image: "https://static.vecteezy.com/system/resources/thumbnails/025/366/463/small/customisation-icon-customize-illustration-sign-mechanical-symbol-settings-logo-option-mark-vector.jpg" },
  ];

   const dashboards = [
    { id: "dashboard", label: "Dashboard" },
    { id: "doctors", label: "Doctors" },
    { id: "patients", label: "Patients" },
    { id: "appointments", label: "Appointments" },
  ];

  return (
    <>
      {isCollapsed && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <button className="hamburger-btn" onClick={toggleSidebar}>☰</button>

      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <img
            src="https://t4.ftcdn.net/jpg/05/54/09/47/360_F_554094731_Ry9LrnCrHahLKQJQrqTykgvuFgCr2dA8.png"
            alt="Logo"
            className="sidebar-logo"
          />
          <span className="sidebar-title">MediCare</span>
        </div>

        {/* Navigation Menu */}
        <div className="nav-menu-wrapper">
          <ul className="nav flex-column mt-3">
            {menuItems.map((item, idx) => (
              <li key={idx} className="nav-item mb-2">
                <Link
                  to={item.link}
                  className={`nav-link d-flex align-items-center ${
                    location.pathname.startsWith(item.link) ? "active" : ""
                  }`}
                >
                  {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar User Info */}
        <div className="sidebar-user">
          <img
            src="https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png"
            alt="Admin"
            className="user-img"
          />
          <div>
            <strong>Dr. Naresh Trehan</strong>
            <br />
            <small className="text-muted">Administrator</small>
          </div>
        </div>

        {/* Dashboard Modal */}
        <div className="modal fade" id="dashboardModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choose Dashboard</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {dashboards.map((d) => (
                  <div className="form-check" key={d.id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dashboardOptions"
                      value={d.id}
                      id={d.id}
                      onChange={(e) => setSelectedDashboard(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor={d.id}>
                      {d.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button
                  className="btn btn-primary"
                  onClick={handleOpenDashboard}
                  data-bs-dismiss="modal"
                  disabled={!selectedDashboard}
                >
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}