import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PatientSidebar.css";

export default function PatientSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { name: "Dashboard", link: "/patient", image: "https://www.shutterstock.com/image-vector/doctor-icon-stethoscope-isolated-vector-600nw-2409319497.jpg" },
    { name: "Appointment", link: "/patient/appointment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuQuyaYdxFfGXx3k6jISI1od75s8KviHT3A&s" },
    { name: "Doctors", link: "/patient/doctors", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIFwl8bVyZSjTY27KeqWtn-vBw0_yVSp6dA&s" },
    { name: "Prescriptions", link: "/patient/prescriptions", image: "https://thumbs.dreamstime.com/b/patient-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133732128.jpg" },
    { name: "Invoices", link: "/patient/invoices", image: "https://static.vecteezy.com/system/resources/thumbnails/004/572/128/small/invoice-line-icon-logo-illustration-free-vector.jpg" },
    // { name: "Settings", link: "/patient/settings", image: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png" },
  ];

  return (
    <>
      {/* Hamburger (visible on mobile) */}
      <button className="hamburger-btn" onClick={toggleSidebar}>☰</button>

      {/* Overlay */}
      {isCollapsed && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <img
            src="https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png"
            alt="Doctor"
            className="sidebar-logo"
          />
          <div>
            <h3 className="sidebar-title">Dr. Calvin Carlo</h3>
            <p className="sidebar-subtitle">Orthopedic</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="sidebar-menu">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className={location.pathname === item.link ? "active" : ""}
            >
              <Link to={item.link}>
                <img src={item.image} alt={item.name} className="menu-image" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        
      </aside>
    </>
  );
}
