import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorTopNavbar.css";

export default function DoctorTopNavbar({ toggleSidebar }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate(); // for navigation

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
    <header className={`doctor-topnavbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>Doctor Dashboard</h1>
        {/* Home Button */}
        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          🏠︎
        </button>
      </div>

      <div className="navbar-right">
        <button
          className="darkmode-btn"
          onClick={handleDarkModeToggle}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☾" : "☀︎"}
        </button>

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

        <div className="profile-wrapper" ref={profileRef}>
          <button
            className="profile-btn"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            DR
          </button>

          {showProfileDropdown && (
            <div className="profile-dropdown show">
              <div className="profile-info">
                <img
                  src="https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png"
                  alt="Doctor"
                />
                <div>
                  <strong>Dr. Priyadharshini</strong>
                  <br />
                  <small>doctor@hospital.com</small>
                </div>
              </div>
              <button className="profile-action">Profile</button>
              <button className="profile-action">Messages</button>
              <button className="profile-action">Support</button>
              <button className="profile-action logout">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
