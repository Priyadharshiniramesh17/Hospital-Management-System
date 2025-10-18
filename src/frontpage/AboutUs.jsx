import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-section position-relative py-5" id="about">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h1 className="mb-2">
           About Us
          </h1>
          <p>
            Our online hospital management system is designed to make healthcare
            accessible and organized. From appointment booking to digital
            records, we aim to simplify healthcare for patients and doctors
            alike.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ul className="about-list">
              <li>✔ Easy Appointment Booking</li>
              <li>✔ Secure Digital Medical Records</li>
              <li>✔ Operation Theater & Resource Management</li>
              <li>✔ Billing & Insurance Integration</li>
              <li>✔ Doctor & Patient Dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
