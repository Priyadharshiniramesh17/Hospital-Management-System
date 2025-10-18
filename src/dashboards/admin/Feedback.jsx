import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([
    { name: "John Smith", feedback: "Great service!", date: "2025-10-01" },
    { name: "Emily Davis", feedback: "Friendly staff and clean hospital.", date: "2025-10-03" },
  ]);

  const [form, setForm] = useState({ name: "", feedback: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.feedback) {
      setFeedbacks([{ ...form, date: new Date().toISOString().split("T")[0] }, ...feedbacks]);
      setForm({ name: "", feedback: "" });
    }
  };

  return (
    <main className="feedback-page">
      <header className="feedback-header">
        <h1>Patient Feedback</h1>
        <p>Share your experience with our hospital or view others' feedback.</p>
      </header>

      <section className="feedback-form-section">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={form.feedback}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <section className="feedback-list">
        {feedbacks.map((item, idx) => (
          <div className="feedback-card" key={idx}>
            <div className="feedback-avatar">{item.name.charAt(0)}</div>
            <div className="feedback-info">
              <h3>{item.name}</h3>
              <p className="feedback-date">{item.date}</p>
              <p className="feedback-text">{item.feedback}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
