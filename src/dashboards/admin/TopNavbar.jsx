import React, { useState, useEffect, useRef } from "react";
import "./TopNavbar.css";

export default function TopNavbar({ toggleSidebar }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef(null);

  const notifications = [
    { type: "Appointment", message: "New appointment scheduled" },
    { type: "Prescription", message: "Prescription renewal pending" },
    { type: "Lab Result", message: "Lab result available" },
  ];

  const unreadCount = notifications.length;

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Close profile dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`admin-topnavbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>Hospital Management Admin</h1>
      </div>

      <div className="navbar-right">
        {/* Dark/Light Mode */}
        <button
          className="darkmode-btn"
          onClick={handleDarkModeToggle}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☾" : "☀︎"}
        </button>

        {/* Notifications */}
        <div className="notification-wrapper">
          <button
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            🔔
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              {notifications.map((n, idx) => (
                <div key={idx} className="notification-item">
                  <strong>{n.type}:</strong> {n.message}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="profile-wrapper" ref={profileRef}>
          <button
            className="profile-btn"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            NT
          </button>

          {showProfileDropdown && (
            <div className="profile-dropdown show">
              <div className="profile-info">
                <img
                  src="https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png"
                  alt="Admin"
                />
                <div>
                  <strong>Dr. Naresh Trehan</strong>
                  <br />
                  <small>admin@mediCare.com</small>
                </div>
              </div>
              <button className="profile-action">Profile</button>
              <button className="profile-action">Chat</button>
              <button className="profile-action">Support</button>
              <button className="profile-action logout">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
