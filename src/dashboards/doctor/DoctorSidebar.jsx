import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DoctorSidebar.css";

export default function DoctorSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { name: "Dashboard", link: "/doctor", image: "https://www.shutterstock.com/image-vector/doctor-icon-stethoscope-isolated-vector-600nw-2409319497.jpg" },
    { name: "Appointment", link: "/doctor/appointment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuQuyaYdxFfGXx3k6jISI1od75s8KviHT3A&s" },
    { name: "Schedule Timing", link: "/doctor/schedule", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO-632N8GEx-vs8hYUNVIpsz1dCzlztz_pw&s" },
    { name: "Invoices", link: "/doctor/invoices", image: "https://static.vecteezy.com/system/resources/thumbnails/004/572/128/small/invoice-line-icon-logo-illustration-free-vector.jpg" },
    { name: "Messages", link: "/doctor/messages", image: "https://static.vecteezy.com/system/resources/previews/014/321/535/non_2x/message-icon-logo-design-vector.jpg" },
    { name: "Profile", link: "/doctor/profile", image: "https://media.istockphoto.com/id/1255163297/vector/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-sign-logo-black-silhouette.jpg?s=612x612&w=0&k=20&c=p6azyhUBIcWx6-aXVRPUTveaVqbTA2bNXpBoGQjEB68=" },
    { name: "Profile Settings", link: "/doctor/profile-settings", image: "https://static.vecteezy.com/system/resources/thumbnails/025/366/463/small/customisation-icon-customize-illustration-sign-mechanical-symbol-settings-logo-option-mark-vector.jpg" },
    { name: "Patients", link: "/doctor/patients", image: "https://thumbs.dreamstime.com/b/patient-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133732128.jpg" },
    { name: "Patients Review", link: "/doctor/review", image: "https://static.vecteezy.com/system/resources/previews/015/900/003/non_2x/quality-value-icon-outline-style-vector.jpg" },
    { name: "Chat", link: "/doctor/chat", image: "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-chat-icon-png-image_1757855.jpg" },
    { name: "Forgot Password", link: "/forgot-password", image: "https://www.shutterstock.com/image-vector/change-password-vector-iconlock-reload-600nw-2283380015.jpg" },
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
