import React from "react";
import "./Footer.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>MediCare</h3>
          <p>Email: <a href="mailto:support@medicare.com">support@medicare.com</a></p>
          <p>Phone: <a href="tel:00069000993">000-69000993</a></p>
          
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Admin Dashboard</a></li>
            <li><a href="#">Doctor Dashboard</a></li>
            <li><a href="#">Patient Dashboard</a></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section links">
          <h4>Products</h4>
          <ul>
            <li><a href="#">OP Billing</a></li>
            <li><a href="#">Lab</a></li>
            <li><a href="#">Pharmacy</a></li>
            <li><a href="#">Electronic Health Record</a></li>
            <li><a href="#">IVR Appointment Booking Software</a></li>
            <li><a href="#">Reminders</a></li>
            <li><a href="#">Stock/Inventory</a></li>
            <li><a href="#">In Patient</a></li>
            <li><a href="#">Meet My Doctor</a></li>
          </ul>
        </div>

        {/* Security */}
        <div className="footer-section security">
          <h4>Security</h4>
          <ul>
            <li>HIPAA Compliant Data Centers</li>
            <li>Multi Geography Backup</li>
            <li>SHA-256 Encryption</li>
            <li>Google Cloud Platform</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 MediCare. All rights reserved.</p>
      </div>
    </footer>
  );
}
