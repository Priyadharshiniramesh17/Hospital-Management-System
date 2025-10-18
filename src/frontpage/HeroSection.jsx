import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Trusted Healthcare for Your Family</h1>
          <p>
            Providing professional and compassionate medical care with modern facilities and expert doctors. 
            Your health is our top priority.
          </p>
          <button className="hero-btn">Book Appointment</button>
        </div>

        <div className="hero-image">
          <img
            src="https://png.pngtree.com/png-vector/20250524/ourmid/pngtree-smiling-female-doctor-with-stethoscope-isolated-on-transparent-background-png-image_16376010.png"
            alt="Doctor Illustration"
          />
        </div>
      </div>
    </section>
  );
}
