import React, { useState } from "react";
import "./DoctorProfileSetting.css";

export default function DoctorProfileSetting({ darkMode }) {
  const [profile, setProfile] = useState({
    firstName: "Christopher",
    lastName: "Burrell",
    email: "contact@example.com",
    phone: "+152 534-468-854",
    bio: "Great doctor if you need your family member to get effective immediate assistance",
    profileImg: "https://via.placeholder.com/150",
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
    accountNotifications: {
      mention: true,
      follow: true,
      share: false,
      message: true,
    },
    marketingNotifications: {
      sale: true,
      news: false,
      jobs: true,
      unsubscribe: false,
    },
  });

  const [schedule, setSchedule] = useState({
    Monday: ["08:00", "20:00"],
    Tuesday: ["08:00", "20:00"],
    Wednesday: ["08:00", "20:00"],
    Thursday: ["08:00", "20:00"],
    Friday: ["08:00", "20:00"],
    Saturday: ["08:00", "18:00"],
    Sunday: ["08:00", "14:00"],
  });

  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in profile.accountNotifications) {
      setProfile((prev) => ({
        ...prev,
        accountNotifications: { ...prev.accountNotifications, [name]: checked },
      }));
    } else if (name in profile.marketingNotifications) {
      setProfile((prev) => ({
        ...prev,
        marketingNotifications: { ...prev.marketingNotifications, [name]: checked },
      }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleScheduleChange = (day, index, value) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].map((time, i) => (i === index ? value : time)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile & Schedule updated successfully!");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted successfully!");
    }
  };

  return (
    <div className={`doctor-profile-setting ${darkMode ? "dark" : ""}`}>
      <h2>Doctor Profile & Schedule Settings</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        {/* Profile Section */}
        <div className="form-section">
          <label>Upload your picture</label>
          <div className="profile-image-section">
            <img src={profile.profileImg} alt="Profile" />
            <input type="file" accept="image/png, image/jpeg" />
          </div>
          <p className="note">Use at least 256x256px image in .jpg or .png format</p>
        </div>

        <div className="form-section">
          <label>Personal Information</label>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={profile.firstName}
              onChange={handleProfileChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={profile.lastName}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleProfileChange} />
            <input type="text" name="phone" placeholder="Phone No." value={profile.phone} onChange={handleProfileChange} />
            <textarea name="bio" placeholder="Your Bio Here" value={profile.bio} onChange={handleProfileChange} />
          </div>
        </div>

        {/* Password Section */}
        <div className="form-section">
          <label>Change Password</label>
          <div className="form-group">
            <input type="password" name="oldPassword" placeholder="Old password" value={profile.oldPassword} onChange={handleProfileChange} />
            <input type="password" name="newPassword" placeholder="New password" value={profile.newPassword} onChange={handleProfileChange} />
            <input type="password" name="retypePassword" placeholder="Re-type New password" value={profile.retypePassword} onChange={handleProfileChange} />
          </div>
        </div>

        {/* Notifications */}
        <div className="form-section">
          <label>Account Notifications</label>
          <div className="form-group checkboxes">
            {Object.keys(profile.accountNotifications).map((key) => (
              <label key={key}>
                <input type="checkbox" name={key} checked={profile.accountNotifications[key]} onChange={handleProfileChange} />
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Marketing Notifications</label>
          <div className="form-group checkboxes">
            {Object.keys(profile.marketingNotifications).map((key) => (
              <label key={key}>
                <input type="checkbox" name={key} checked={profile.marketingNotifications[key]} onChange={handleProfileChange} />
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
            ))}
          </div>
        </div>

        {/* Schedule Timing */}
        <div className="form-section">
          <label>Schedule Timing</label>
          <div className="schedule-table">
            {Object.keys(schedule).map((day) => (
              <div className="schedule-row" key={day}>
                <span className="day">{day}</span>
                <input
                  type="time"
                  value={schedule[day][0]}
                  onChange={(e) => handleScheduleChange(day, 0, e.target.value)}
                />
                <span>to</span>
                <input
                  type="time"
                  value={schedule[day][1]}
                  onChange={(e) => handleScheduleChange(day, 1, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button type="submit" className="save-btn">Save Changes</button>

        {/* Delete Account */}
        <div className="form-section delete-account">
          <label>Delete Account</label>
          <p>Do you want to delete the account? Please press below "Delete" button</p>
          <button type="button" className="delete-btn" onClick={handleDeleteAccount}>Delete</button>
        </div>
      </form>
    </div>
  );
}
