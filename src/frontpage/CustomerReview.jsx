import React from "react";
import "./CustomerReview.css";

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      img: "https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png",
      name: "Pramendra Rajak",
      role: "IT Head, Vivekananda Kendra Bina Refinery Hospital",
      review: "Our hospital is entirely managed by MediCare. The software is very easy to use and the whole workflow is end-to-end automated...",
    },
    {
      id: 2,
      img: "https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png",
      name: "Dr. Prasanna Kumar",
      role: "Endocrinologist, India",
      review: "MediCare EMR is simple, and easy to use. When patients contact me over e-consultation, all their past history is in one place...",
    },
    {
      id: 3,
      img: "https://docpulse.com/wp-content/uploads/2020/01/doctor_img.png",
      name: "Dr. Naveen Kini",
      role: "Pediatrician, India",
      review: "After looking at various products, I finally zeroed down to MediCare, which I have been using for the last 2 years...",
    },
  ];

  
  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className="customer-review-section py-5" id="reviews">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>
            Read <span className="liner-text bg-linear">What Our Customers Say</span>
          </h2>
        </div>

        <div className="review-grid">
          {reviews.map((r) => (
            <div key={r.id} className="review-card p-4 rounded shadow-sm text-center">
              <img src={r.img} alt={r.name} className="review-img mb-3" />
              <p className="review-text">“{r.review}”</p>
              <h6 className="mt-3 mb-1">{r.name}</h6>
              <small className="text-muted">{r.role}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
