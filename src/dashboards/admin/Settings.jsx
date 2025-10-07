import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <main className="settings-page">
      <h1>Settings</h1>

      {/* Profile Section */}
      <section className="settings-section profile-section">
        <h2>Profile Settings</h2>
        <div className="profile-form">
          <label>
            Full Name
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="john@example.com" />
          </label>
          <label>
            Phone
            <input type="tel" placeholder="+1 234 567 890" />
          </label>
          <button className="save-btn">Save Profile</button>
        </div>
      </section>

      {/* Password Section */}
      <section className="settings-section password-section">
        <h2>Password Settings</h2>
        <div className="password-form">
          <label>
            Current Password
            <input type="password" placeholder="********" />
          </label>
          <label>
            New Password
            <input type="password" placeholder="********" />
          </label>
          <label>
            Confirm New Password
            <input type="password" placeholder="********" />
          </label>
          <button className="save-btn">Change Password</button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="settings-section notifications-section">
        <h2>Notifications</h2>
        <div className="notification-item">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={true}
            onChange={() => {}}
          />
        </div>
        <div className="notification-item">
          <span>SMS Notifications</span>
          <input
            type="checkbox"
            checked={false}
            onChange={() => {}}
          />
        </div>
        <div className="notification-item">
          <span>Push Notifications</span>
          <input
            type="checkbox"
            checked={true}
            onChange={() => {}}
          />
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <section className="settings-section darkmode-section">
        <h2>Appearance</h2>
        <div className="darkmode-toggle">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
        </div>
      </section>
    </main>
  );
}
