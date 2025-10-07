import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("patient");
  const [isRegister, setIsRegister] = useState(true);

  // Password toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Reset form on mount to prevent browser autofill
  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
    setPhone("");
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({ fullName, email, password, role, phone, isRegister });

    // Save role in localStorage
    localStorage.setItem("role", role);

    // Navigate based on role
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "doctor":
        navigate("/doctor");
        break;
      case "patient":
        navigate("/patient");
        break;
      default:
        navigate("/login");
    }
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setIsRegister(selectedRole === "patient");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Illustration */}
        <div className="login-illustration">
          <img
            src="https://www.shutterstock.com/image-vector/female-doctor-glasses-pensive-pose-600nw-2557338391.jpg"
            alt="Medical Illustration"
          />
        </div>

        {/* Form */}
        <div className="login-form">
          <h2>{isRegister ? "Register" : "Login"}</h2>

          {(role === "doctor" || role === "admin") && (
            <p className="role-info">
              {role === "doctor"
                ? "Use your pre-created Doctor account."
                : "Admin account is pre-created."}
            </p>
          )}

          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Hidden dummy inputs */}
            <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
            <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

            {/* Full Name */}
            {isRegister && (
              <div className="input-group">
                <input
                  type="text"
                  name="fullname"
                  placeholder=" "
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="off"
                />
                <img
                  src="https://img.icons8.com/ios-filled/50/1abc9c/user.png"
                  className="input-img"
                  alt="Full Name"
                />
                <label>Full Name</label>
              </div>
            )}

            {/* Phone */}
            {isRegister && (
              <div className="input-group">
                <input
                  type="text"
                  name="phone"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  autoComplete="off"
                />
                <img
                  src="https://img.icons8.com/ios-filled/50/1abc9c/phone.png"
                  className="input-img"
                  alt="Phone"
                />
                <label>Phone</label>
              </div>
            )}

            {/* Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/1abc9c/new-post.png"
                className="input-img"
                alt="Email"
              />
              <label>Email</label>
            </div>

            {/* Password */}
            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/1abc9c/lock-2.png"
                className="input-img"
                alt="Password"
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
              <label>Password</label>
            </div>

            {/* Confirm Password */}
            {isRegister && (
              <div className="input-group password-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder=" "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <img
                  src="https://img.icons8.com/ios-filled/50/1abc9c/lock-2.png"
                  className="input-img"
                  alt="Confirm Password"
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
                <label>Confirm Password</label>
              </div>
            )}

            {/* Role select */}
            <div className="input-group">
              <select name="role" value={role} onChange={handleRoleChange} required>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="btn">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          {/* Toggle Login/Register */}
          {role === "patient" && (
            <p className="toggle-text">
              {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Login" : "Register"}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
