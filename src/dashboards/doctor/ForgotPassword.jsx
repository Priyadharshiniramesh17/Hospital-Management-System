import React, { useState } from "react";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter your registered email!");
    } else {
      setMessage("Password reset link sent to your email.");
    }
  };

  return (
    <div className="forget-password-page">
      <div className="forget-card">
        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your registered email to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Reset Link
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <a href="/login" className="back-link">
          ← Back to Login
        </a>
      </div>
    </div>
  );
}
