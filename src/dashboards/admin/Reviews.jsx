import React, { useState } from "react";
import "./Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "John Smith",
      feedback: "Excellent service and friendly staff!",
      rating: 5,
      date: "2025-10-01",
    },
    {
      name: "Emily Davis",
      feedback: "Doctors were very attentive and helpful.",
      rating: 4,
      date: "2025-10-03",
    },
    {
      name: "Robert Wilson",
      feedback: "Clean facilities and prompt treatment.",
      rating: 5,
      date: "2025-10-05",
    },
    {
      name: "Nisha Sharma",
      feedback: "Good overall experience, but waiting time was long.",
      rating: 3,
      date: "2025-10-06",
    },
  ]);

  return (
    <main className="reviews-page">
      <header className="reviews-header">
        <h1>Patient Reviews</h1>
        <p>Check feedback from our patients to improve our services.</p>
      </header>

      <section className="reviews-cards">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-avatar">{review.name.charAt(0)}</div>
            <div className="review-info">
              <h3>{review.name}</h3>
              <p className="review-date">{review.date}</p>
              <p className="review-feedback">{review.feedback}</p>
              <div className="review-rating">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="star empty">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
